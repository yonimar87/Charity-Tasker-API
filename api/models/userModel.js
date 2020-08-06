const mongoose = require("mongoose");
const { text } = require("body-parser");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: "Must have a username",
    },
    email: {
      type: String,
      required: "Must have an email address",
    },
    password: {
      type: String,
      required: "Must have a password",
    },
    name: {
      type: String,
    },
    image_url: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("Users", UserSchema);
