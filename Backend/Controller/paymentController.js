const Order = require("../models/order");
const Payment = require("../models/Payment");

// CREATE PAYMENT
const createPayment = async (req, res) => {
  try {
    const order = await Order.findById(req.body.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const payment = await Payment.create({
      user: req.user._id,
      order: order._id,
      amount: order.totalAmount,
      paymentMethod: req.body.method,
      paymentStatus: "paid",
      transactionId: Date.now().toString(),
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER PAYMENTS
const myPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id })
      .populate("order");

    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADMIN PAYMENTS
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user", "name email")
      .populate("order");

    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPayment, myPayments, getPayments };
