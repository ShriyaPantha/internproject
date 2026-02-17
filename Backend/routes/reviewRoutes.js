const express = require("express");
const router = express.Router();
const { addReview, getReviews, deleteReview } = require("../Controller/reviewController");

router.post("/:productId", addReview);
router.get("/:productId", getReviews);
router.delete("/:id",  deleteReview);

module.exports = router;
