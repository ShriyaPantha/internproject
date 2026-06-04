const mongoose = require("mongoose");
const Review = require("../models/Review");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const User = require("../models/User");

// ADD REVIEW
const addReview = async (req, res) => {
  try {

    const productId = req.params.productId;
    const userId = req.user._id;
    const { rating, comment } = req.body;

    const productObjectId = new mongoose.Types.ObjectId(productId);

    const product = await Product.findById(productObjectId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    const userOrder = await Order.findOne({
      user: userId,
      "products.product": productObjectId
    });

    if (!userOrder)
      return res.status(403).json({
        message: "You must purchase this product before reviewing"
      });

    const existingReview = await Review.findOne({
      user: userId,
      product: productObjectId
    });

    if (existingReview)
      return res.status(400).json({ message: "You already reviewed this product" });

    const userPayment = await Payment.findOne({ order: userOrder._id });

    const review = await Review.create({
      user: userId,
      product: productObjectId,
      order: userOrder._id,
      payment: userPayment ? userPayment._id : null,
      rating,
      comment
    });

    // ADD REVIEW TO PRODUCT
    await Product.findByIdAndUpdate(
      productObjectId,
      { review: review._id }
    );

    // ADD REVIEW TO USER
    await User.findByIdAndUpdate(
      userId,
      { $addToSet: { reviews: review._id } }
    );

    const fullReview = await Review.findById(review._id)
      .populate("user", "name email")
      .populate({
        path: "product",
        select: "title description price",
        populate: { path: "user", select: "name email" }
      })
      .populate({
        path: "order",
        populate: [
          { path: "user", select: "name email" },
          {
            path: "products.product",
            select: "title price",
            populate: { path: "user", select: "name email" }
          }
        ]
      })
      .populate({
        path: "payment",
        populate: [
          { path: "order", populate: { path: "user", select: "name email" } },
          { path: "user", select: "name email" }
        ]
      });

    res.status(201).json(fullReview);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReviews = async (req, res) => {
  try {

    const productObjectId = new mongoose.Types.ObjectId(req.params.productId);

    const reviews = await Review.find()
      .populate("user", "name email")
      .populate("product")
      .populate("order")
      .populate("payment");

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET REVIEWS
const getReviewsById = async (req, res) => {
  try {

    const productObjectId = new mongoose.Types.ObjectId(req.params.productId);

    const reviews = await Review.find({ product: productObjectId })
      .populate("user", "name email")
      .populate("product")
      .populate("order")
      .populate("payment");

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE REVIEW
const deleteReview = async (req, res) => {
  try {

    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review)
      return res.status(404).json({ message: "Review not found" });

    res.status(200).json({ message: "Review deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addReview, getReviews,getReviewsById, deleteReview };