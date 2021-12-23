const mongoose = require("mongoose"); //bring up mongoose

const UserSchema = new mongoose.Schema( //create new instance : usershema
  {
    nom: {
      type: String,
      required: true,
    },

    prenom: {
      type: String,
      required: true,
    },

    rib: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    profession: {
      type: String,
      required: true,
    },

    addresse: {
      type: String,
      required: true,
    },

    tel: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    zip: {
      type: Number,
      required: true,
    },

    role: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
