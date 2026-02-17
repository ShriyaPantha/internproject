const express = require("express");
const router = express.Router();


const { createPayment, myPayments, getPayments } = require("../controller/paymentController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/", protect, createPayment);
router.get("/my", protect, myPayments);
router.get("/", protect, adminOnly, getPayments);

module.exports = router;
