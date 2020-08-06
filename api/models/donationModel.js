const mongoose = require("mongoose");

const { Schema } = mongoose;

const DonationSchema = new Schema(
  {
    currency: {
      type: String,
      required: "Must have a currency",
    },

    amount: {
      type: Number,
      required: "Must have an amount",
    },

    user_id: {
      type: String,
      required: "A user must donate",
    },

    challenge_id: {
      type: String,
    },
  },
  { collection: "Donations" }
);

//currency
//amount integer/ will maybe be options
//user_id
//challenge_id

module.exports = mongoose.model("Donations", DonationSchema);
