const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try { 
    await mongoose.connect(process.env.MONGO_URI);
    // await mongoose.connect('mongodb+srv://ravichandora8:4RtSDOggAQejHIvV@cluster0.uopzlb1.mongodb.net/chatgptclone?retryWrites=true&w=majority');
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Mognodb Database Error ${error}`.bgRed.white, error);
  }
};

module.exports = connectDB;
