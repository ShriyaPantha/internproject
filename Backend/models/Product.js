const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  stock: {
    type: Number,
    default: 0
  },

  category: {
    type: String,
    required: true
  },

  image: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product