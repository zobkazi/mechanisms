import app from "./app";
// import db from "./config/dbUrl";
import "dotenv/config";
import { registration } from "@/routes";
import mongoose from "mongoose";

app;
// db;

mongoose
  .connect("mongodb://localhost:27017/RegistrationHistory")
  .then(() => {
    console.log("Connected to MongoDB success");
  })
  .catch((err) => {
    console.log(err);
  });

// all the routes are defined here
app.use("/auth", registration);
function then(arg0: (result: any) => void) {
  throw new Error("Function not implemented.");
}
