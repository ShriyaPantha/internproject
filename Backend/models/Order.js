const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    address: {
      type: String,
      required: false,
    },

    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Order || mongoose.model("Order", orderSchema);