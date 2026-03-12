const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

const createOrder = async (req, res) => {
  try {
    const { products, address } = req.body;

    let total = 0;

    for (const item of products) {
      const productId = item.product || item._id;
      const product = await Product.findById(productId);

      if (!product)
        return res.status(404).json({ message: "Product not found" });

      if (product.stock < item.quantity)
        return res.status(400).json({ message: "Not enough stock" });

      total += product.price * item.quantity;

      product.stock -= item.quantity;
      await product.save();
    }

    const order = await Order.create({
      user: req.user._id,
      products: products.map(item => ({
        product: item.product || item._id,
        quantity: item.quantity
      })),
      totalAmount: total,
      address,
    });

    // PUSH ORDER INTO USER
    await User.findByIdAndUpdate(req.user._id, {
      $push: { orders: order._id }
    });

    // PUSH ORDER INTO PRODUCT
    for (const item of order.products) {
      await Product.findByIdAndUpdate(
        item.product,
        { $addToSet: { order: order._id } }
      );
    }

    const populatedOrder = await Order.findById(order._id)
      .populate("user", "name email role")
      .populate("payment")
      .populate({
        path: "products.product",
        select: "title price image category",
      });

    res.status(201).json(populatedOrder);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// USER ORDERS
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("user", "name email role")
    .populate("payment")
    .populate({
      path: "products.product",
      select: "title price image category",
    });

  res.json(orders);
};

// ADMIN ORDERS
const getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email role")
    .populate("payment")
    .populate({
      path: "products.product",
      select: "title price image category",
    });

  res.json(orders);
};

// UPDATE STATUS
const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return res.status(404).json({ message: "Order not found" });

  order.status = req.body.status;
  await order.save();

  res.json(order);
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrders,
  updateOrderStatus,
};