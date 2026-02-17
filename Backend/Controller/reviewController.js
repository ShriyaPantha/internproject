const { Review } = require("../models/Review");

// ADD REVIEW (user)
const addReview = async (req, res) => {
  const review = await Review.create({
    user: req.user._id,
    product: req.params.productId,
    rating: req.body.rating,
    comment: req.body.comment
  });
  res.status(201).json(review);
};

// GET REVIEWS FOR PRODUCT
const getReviews = async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId }).populate("user", "name");
  res.json(reviews);
};

// DELETE REVIEW (admin)
const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
};

module.exports = { addReview, getReviews, deleteReview };
