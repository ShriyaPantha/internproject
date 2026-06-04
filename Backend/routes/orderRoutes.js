const express = require("express");
const router = express.Router();

const { createOrder, getMyOrders, getOrders, updateOrderStatus } = require("../Controller/orderController");
const { protect } = require("../Middleware/auth");
// const { protect } = require("../middleware/auth");

// router.post("/", protect, createOrder);
router.post("/", protect, createOrder);

router.get("/",   getOrders);
router.get("/:id", protect, getMyOrders);
router.put("/:id", protect,  updateOrderStatus);

module.exports = router;
