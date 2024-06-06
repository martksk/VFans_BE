const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    banner: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Community", communitySchema);
