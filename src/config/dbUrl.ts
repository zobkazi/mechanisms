// db.js
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://exzobaidulkazi:m5tgIU0YPwY3A0q3@cluster0.f143vc0.mongodb.net/auth_mechanisms";
mongoose.set("strictQuery", true);
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB success");
});

export default db;
