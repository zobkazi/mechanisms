import app from "./app";
// import db from "./config/dbUrl";
import "dotenv/config";
import { registration, login } from "@/routes";
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

const allRoutes = [registration, login];

app.use("/auth", allRoutes);
