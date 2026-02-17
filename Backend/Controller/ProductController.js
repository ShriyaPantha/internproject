const  Product = require("../models/Product");
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};



const getProducts = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};


const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.json(product);
};


const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.json(product);
};


const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  return res.json({ message: "Product deleted" });
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};
