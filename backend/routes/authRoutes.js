const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  refreshToken,
} = require("../controllers/authController");

const {
  registerValidator,
  loginValidator,
  validate,
} = require("../validators/authValidator");

const { verifyToken } = require("../middleware/authMiddleware");

// ─── Public Routes ────────────────────────────────────────────
router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);
router.post("/refresh", refreshToken);

// ─── Protected Routes ─────────────────────────────────────────
router.post("/logout", verifyToken, logout);

module.exports = router;
