const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  },

  amount: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ["cod", "esewa", "khalti", "card"],
    default: "cod"
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending"
  },

  transactionId: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});


const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment