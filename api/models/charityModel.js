const mongoose = require("mongoose");
const { text } = require("body-parser");

const { Schema } = mongoose;

const CharitySchema = new Schema(
  {
    name: {
      type: String,
      required: "Each charity has a name",
    },
    website: {
      type: String,
      required: "Need a link to a charity",
    },

    image_url: {
      type: String,
    },
  },
  { collection: "Charity" }
);

//will need many to many with challenges

module.exports = mongoose.model("Charity", CharitySchema);
