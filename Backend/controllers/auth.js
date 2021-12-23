const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpire } = require("../config/keys");

exports.registerController = async (req, res) => {
  const { nom, prenom, rib, password, profession, addresse, tel, status, zip, role } = req.body;

  try {
    const user = await User.findOne({ rib: rib });

    if (user) {
      console.log("Compte deja existant");

      return res.status(400).json({
        errorMessage: "Compte deja existant", // error message coz we find the same e-mail
      });
    } else {
      console.log("Creaction avec sucesse.");

      const newUser = new User(); // create a new user

      newUser.nom = nom;
      newUser.prenom = prenom;
      newUser.rib = rib;
      newUser.profession = profession;
      newUser.addresse = addresse;
      newUser.tel = tel;
      newUser.status = status;
      newUser.zip = zip;
      newUser.role = role;


      const salt = await bcrypt.genSalt(10);

      newUser.password = await bcrypt.hash(password, salt);

      await newUser.save(); // save to db

      return res.status(201).json({
        successMessage: "Registration success . Please signin.",
      });
    }
  } catch (err) {
    console.log("signupController error: ", err);
    
    return res.status(500).json({
      errorMessage: "Server error",
    });
  }
};

exports.loginController = async (req, res) => {
  const { rib, password } = req.body;

  try {
    const user = await User.findOne({ rib });
    if (!user) {
      console.log("Invalid credentials");
      return res.status(404).json({
        errorMessage: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({
        errorMessage: "Invalid credentials",
      });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };

    await jwt.sign(
      payload,
      jwtSecret,
      { expiresIn: jwtExpire },
      (err, token) => {
        if (err) console.log("jwt error:", err);
        const { _id, nom, rib, role } = user;

        res.json({
          token,
          user: { _id, nom, rib, role },
        });
      }
    );

    console.log("Loged in");
  } catch (err) {
    console.log("signinController error: ", err);
    return res.status(500).json({
      errorMessage: "Server error",
    });
  }
};
