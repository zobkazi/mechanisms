import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/";
import authMiddleware from "./middleware/authMiddleware";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

// Protected route example
app.get("/api/profile", authMiddleware, (req, res) => {
  // Access userId from req.userData
  const userId = req["userData"].userId;
  res.status(200).json({ message: `Profile data for user with ID: ${userId}` });
});

mongoose
  .connect("mongodb://localhost:27017/your_database", {})
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.error(error));
