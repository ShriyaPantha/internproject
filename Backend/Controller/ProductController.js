const Product = require("../models/Product");
const Review = require("../models/Review");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const User = require("../models/User");

// ================= CREATE PRODUCT =================
const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      image: req.body.image,
      user: req.user._id
    });

    // Add this product to user's products array
    await User.findByIdAndUpdate(req.user._id, {
      $push: { products: { product: product._id, quantity: req.body.quantity || 1 } }
    });

    const populatedProduct = await Product.findById(product._id)
      .populate({ path: "user", select: "name email role" });

    res.status(201).json(populatedProduct);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ================= GET ALL PRODUCTS =================
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate({ path: "user", select: "name email role" })
      .lean();

    const fullProducts = await Promise.all(
      products.map(async (product) => {
        // Find all orders containing this product
        let orders = await Order.find({ "products.product": product._id })
          .populate({ path: "user", select: "name email role" })
          .populate({ path: "products.product", select: "title price" })
          .lean();

        // Attach payment to each order
        orders = await Promise.all(
          orders.map(async (order) => {
            const payment = await Payment.findOne({ order: order._id })
              .populate({ path: "user", select: "name email role" })
              .lean();
            return { ...order, payment: payment || null };
          })
        );

        // Calculate total quantity sold
        let totalSoldQuantity = 0;
        orders.forEach(order => {
          order.products.forEach(item => {
            if (item.product._id.toString() === product._id.toString()) {
              totalSoldQuantity += item.quantity;
            }
          });
        });

        // Fetch reviews
        const reviews = await Review.find({ product: product._id })
          .populate({ path: "user", select: "name email role" })
          .lean();

        return {
          ...product,
          totalOrders: orders.length,
          totalSoldQuantity,
          orders,
          totalReviews: reviews.length,
          reviews
        };
      })
    );

    res.json(fullProducts);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ================= GET SINGLE PRODUCT =================
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({ path: "user", select: "name email role" })
      .lean();

    if (!product) return res.status(404).json({ message: "Product not found" });

    let orders = await Order.find({ "products.product": product._id })
      .populate({ path: "user", select: "name email role" })
      .populate({ path: "products.product", select: "title price" })
      .lean();

    orders = await Promise.all(
      orders.map(async (order) => {
        const payment = await Payment.findOne({ order: order._id })
          .populate({ path: "user", select: "name email role" })
          .lean();
        return { ...order, payment: payment || null };
      })
    );

    let totalSoldQuantity = 0;
    orders.forEach(order => {
      order.products.forEach(item => {
        if (item.product._id.toString() === product._id.toString()) {
          totalSoldQuantity += item.quantity;
        }
      });
    });

    const reviews = await Review.find({ product: product._id })
      .populate({ path: "user", select: "name email role" })
      .lean();

    res.json({
      ...product,
      totalOrders: orders.length,
      totalSoldQuantity,
      orders,
      totalReviews: reviews.length,
      reviews
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE PRODUCT =================
const updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized 🚫" });
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate({ path: "user", select: "name email role" });

    // Optional: update product in user's products array (if quantity/title changed)
    await User.updateOne(
      { _id: product.user, "products.product": product._id },
      { $set: { "products.$.quantity": req.body.quantity || 1 } }
    );

    res.json(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ================= DELETE PRODUCT =================
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized 🚫" });
    }

    await product.deleteOne();

    // Remove product from user's products array
    await User.findByIdAndUpdate(product.user, { $pull: { products: { product: product._id } } });

    res.json({ message: "Product deleted ✅" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};