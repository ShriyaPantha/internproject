const express = require("express")
const router = express.Router()

const User = require("../models/User")
const { register, login, verifyUser, logout,getUsers,getUser,updateUser,deleteUser } = require("../Controller/authController");
const { verify } = require("jsonwebtoken");


router.post("/register", register);
router.post("/login", login);
router.post("/verify/:token", verifyUser);
router.post("/logout", logout);
//crude routes
router.get("/users", getUsers);
router.get("/users/:id",verify, getUser);;
router.get("/users/:id", updateUser);
router.get("/users/:id", deleteUser);







module.exports = router;