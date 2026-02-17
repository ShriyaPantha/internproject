const express = require("express");
const router = express.Router();

const { createOrder, getMyOrders, getOrders, updateOrderStatus } = require("../Controller/orderController");
const { protect } = require("../middleware/auth");

router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);
router.get("/", protect,  getOrders);
router.put("/:id", protect,  updateOrderStatus);

module.exports = router;
