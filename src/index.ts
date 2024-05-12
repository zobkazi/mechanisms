import app from "./app";
// import db from "./config/dbUrl";
import "dotenv/config";
import { registration, login, getDashboard } from "@/routes";
import mongoose from "mongoose";
import { googleAuth } from "./routes";

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
const dashboard = getDashboard;

app.use("/", dashboard);
app.use("/auth", allRoutes);

app.use("/", googleAuth);
