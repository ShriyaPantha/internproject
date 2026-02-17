const Order  = require("../models/order");
const Product= require("../models/Product");


// CREATE ORDER (user)
const createOrder = async (req, res) => {
  const { products, address } = req.body;

  let total = 0;

  for (let item of products) {
    const product = await Product.findById(item.product);
    total += product.price * item.quantity;
  }

  const order = await Order.create({
    user: req.user._id,
    products,
    totalAmount: total,
    address
  });

  res.status(201).json(order);
};

// USER ORDERS
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate("products.product");
  res.json(orders);
};

// ADMIN ALL ORDERS
const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// UPDATE STATUS
const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);
  order.status = req.body.status;
  await order.save();
  res.json(order);
};
 module.exports= {createOrder,getMyOrders, getOrders , updateOrderStatus}