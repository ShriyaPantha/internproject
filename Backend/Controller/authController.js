const User = require("../models/User");
const Order = require("../models/Order");
const Payment = require("../models/Payment");
const Review = require("../models/Review");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully ✅",
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ================= LOGIN =================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= VERIFY USER =================
const verifyUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email: email.trim() });
    if (!user) return res.status(401).json({ message: "Verification failed" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Verification failed" });

    res.status(200).json({ success: true, message: "User verified successfully", userId: user._id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= LOGOUT =================
const logout = async (req, res) => {
  res.status(200).json({ message: "Logout successful ✅" });
};

// ==================================================
// ================= USER CRUD =======================
// ==================================================

// ================= GET ALL USERS WITH DETAILS =================
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    const usersWithDetails = await Promise.all(users.map(async (user) => {
      // Get user's orders
      const orders = await Order.find({ user: user._id }).populate("products.product").lean();

      // Get user's payments
      const payments = await Payment.find({ user: user._id }).populate({
        path: "order",
        populate: { path: "products.product" },
      }).lean();

      // Get user's reviews
      const reviews = await Review.find({ user: user._id }).populate("product").lean();

      return {
        ...user.toObject(),
        totalOrders: orders.length,
        orders,
        totalPayments: payments.length,
        payments,
        totalReviews: reviews.length,
        reviews,
      };
    }));

    res.status(200).json({ success: true, count: usersWithDetails.length, users: usersWithDetails });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= GET SINGLE USER WITH DETAILS =================
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const orders = await Order.find({ user: user._id }).populate("products.product").lean();
    const payments = await Payment.find({ user: user._id }).populate({
      path: "order",
      populate: { path: "products.product" },
    }).lean();
    const reviews = await Review.find({ user: user._id }).populate("product").lean();

    res.status(200).json({
      success: true,
      user: {
        ...user.toObject(),
        totalOrders: orders.length,
        orders,
        totalPayments: payments.length,
        payments,
        totalReviews: reviews.length,
        reviews,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= UPDATE USER =================
const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User updated successfully", user });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ================= DELETE USER =================
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
  verifyUser,
  logout,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};