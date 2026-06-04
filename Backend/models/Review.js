const mongoose = require("mongoose");
const User = require("./User"); // added

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },

    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },

    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


// ================= AUTO UPDATE USER REVIEWS =================
reviewSchema.post("save", async function (doc) {
  try {
    await User.findByIdAndUpdate(
      doc.user,
      { $addToSet: { reviews: doc._id } }
    );
  } catch (error) {
    console.error("User review update error:", error);
  }
});


// Check if model already exists, otherwise create it
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

module.exports = Review;