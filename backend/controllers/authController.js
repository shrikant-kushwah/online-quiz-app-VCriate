const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};


// Add this function in your authController.js
const tokenBlacklist = [];
exports.logout = (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    tokenBlacklist.push(token); 
    return res.json({ message: "User logged out successfully" });
  }
  return res.status(400).json({ message: "No token provided" });
};

// Middleware to check if token is blacklisted
const isTokenBlacklisted = (token) => tokenBlacklist.includes(token);

// Example usage in the login route
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  if (isTokenBlacklisted(token)) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  res.json({ token });
};
