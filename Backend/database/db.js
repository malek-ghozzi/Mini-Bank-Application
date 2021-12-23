const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:Admin123@cluster0.z3vjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
