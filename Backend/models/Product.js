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

  // Owner of the product
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  // A single review
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },

  // Orders that include this product
  order: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }],

  // Payments associated with this product
  payment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment"
  }],

}, { timestamps: true });



// ================= AUTO UPDATE ORDER IN PRODUCT =================
productSchema.statics.addOrderToProduct = async function(productId, orderId) {
  try {

    await this.findByIdAndUpdate(
      productId,
      { $addToSet: { order: orderId } }
    );

  } catch (error) {
    console.error("Product order update error:", error);
  }
};



// ================= AUTO UPDATE PAYMENT IN PRODUCT =================
productSchema.statics.addPaymentToProduct = async function(productId, paymentId) {
  try {

    await this.findByIdAndUpdate(
      productId,
      { $addToSet: { payment: paymentId } }
    );

  } catch (error) {
    console.error("Product payment update error:", error);
  }
};



// ================= AUTO UPDATE REVIEW IN PRODUCT =================
productSchema.statics.addReviewToProduct = async function(productId, reviewId) {
  try {

    await this.findByIdAndUpdate(
      productId,
      { review: reviewId }
    );

  } catch (error) {
    console.error("Product review update error:", error);
  }
};



// ✅ Safe model declaration
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;