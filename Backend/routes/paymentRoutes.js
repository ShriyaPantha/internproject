const express = require("express");
const router = express.Router();


const { createPayment, myPayments, getPayments } = require("../controller/paymentController");
const { protect, adminOnly } = require("../Middleware/auth");

router.post("/", protect, createPayment);
router.get("/my", protect, myPayments);
router.get("/", protect,  getPayments);

module.exports = router;
