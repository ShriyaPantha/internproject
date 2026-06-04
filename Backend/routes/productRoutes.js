const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require("../Controller/ProductController");
const { protect } = require("../Middleware/auth");


router.post("/",protect, createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;
