const Order = require("../models/Order");
const Payment = require("../models/Payment");
const Product = require("../models/Product");
const User = require("../models/User");

// ================= CREATE PAYMENT =================
const createPayment = async (req, res) => {
  try {
    const order = await Order.findById(req.body.orderId);

    if (!order)
      return res.status(404).json({ message: "Order not found" });

    if (order.payment)
      return res.status(400).json({ message: "Payment already exists" });

    // Create payment
    const payment = await Payment.create({
      user: req.user._id,
      order: order._id,
      products: order.products,
      amount: order.totalAmount,
      paymentMethod: req.body.method || "cod",
      paymentStatus: "paid",
      transactionId: Date.now().toString(),
    });

    // ================= LINK PAYMENT TO ORDER =================
    order.payment = payment._id;
    order.status = "processing";
    await order.save();

    // ================= UPDATE USER PAYMENTS =================
    await User.findByIdAndUpdate(
      req.user._id,
      { $addToSet: { payments: payment._id } }
    );

    // ================= UPDATE PRODUCTS =================
    for (const item of order.products) {
      const productId = item.product || item._id;

      // Add order ID to product.order[]
      await Product.findByIdAndUpdate(
        productId,
        { $addToSet: { order: order._id } }
      );

      // Add payment ID to product.payment[]
      await Product.findByIdAndUpdate(
        productId,
        { $addToSet: { payment: payment._id } }
      );
    }

    // ================= POPULATE RESPONSE =================
    const populatedPayment = await Payment.findById(payment._id)
      .populate("user", "name email")
      .populate({
        path: "order",
        populate: {
          path: "products.product",
          select: "title price image category order payment",
        },
      });

    res.status(201).json(populatedPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= USER PAYMENTS =================
const myPayments = async (req, res) => {
  const payments = await Payment.find({ user: req.user._id })
    .populate("user", "name email")
    .populate({
      path: "order",
      populate: {
        path: "products.product",
        select: "title price image category order payment",
      },
    });

  res.json(payments);
};

// ================= ADMIN PAYMENTS =================
const getPayments = async (req, res) => {
  const payments = await Payment.find()
    .populate("user", "name email")
    .populate({
      path: "order",
      populate: {
        path: "products.product",
        select: "title price image category order payment",
      },
    });

  res.json(payments);
};

module.exports = {
  createPayment,
  myPayments,
  getPayments,
};