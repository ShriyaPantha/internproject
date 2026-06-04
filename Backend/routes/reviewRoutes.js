const express = require("express");
const router = express.Router();
const { addReview, getReviews, deleteReview, getReviewsById, updateReview } = require("../Controller/reviewController");
const { protect } = require("../Middleware/auth");

router.post("/:productId",protect, addReview);
router.get("/:productId", getReviewsById);
router.delete("/:id",  deleteReview);
router.get("/",  getReviews);

module.exports = router;
