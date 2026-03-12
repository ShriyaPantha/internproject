const mongoose = require("mongoose");
const User = require("./User"); // added

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    amount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["cod", "esewa", "khalti", "card"],
      default: "cod",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "paid",
    },

    transactionId: {
      type: String,
    },
  },
  { timestamps: true }
);


// ================= AUTO UPDATE USER PAYMENTS =================
paymentSchema.post("save", async function (doc) {
  try {
    await User.findByIdAndUpdate(
      doc.user,
      { $addToSet: { payments: doc._id } }
    );
  } catch (error) {
    console.error("User payment update error:", error);
  }
});


module.exports =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);