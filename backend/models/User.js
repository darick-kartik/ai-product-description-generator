const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
  type: String,
  required: function () {
    return this.provider === "local";
  },
},

    name: {
      type: String,
      default: "",
    },

    provider: {
      type: String,
      default: "local",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);