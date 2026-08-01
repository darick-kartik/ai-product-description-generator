const express = require("express");
const passport = require("passport");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../middleware/validation");

const authLimiter = require("../middleware/rateLimiter");
const generateToken = require("../utils/generateToken");

const router = express.Router();

// Register
router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

// Login
router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);

// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  }),
  (req, res) => {
    const token = generateToken(req.user._id);

    res.redirect(
      `${process.env.CLIENT_URL}/login?token=${token}&name=${encodeURIComponent(
        req.user.name
      )}&email=${encodeURIComponent(
        req.user.email
      )}&provider=google`
    );
  }
);

module.exports = router;