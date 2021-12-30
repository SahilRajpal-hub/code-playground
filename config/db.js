const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const URI = process.env.MONGO_URI;
    const conn = await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`mongo db connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
