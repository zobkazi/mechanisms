import mongoose, { Schema, Document } from "mongoose";

// Define an interface representing the document's schema
interface User extends Document {
  name: string;
  email: string;
  password: string;
}

// Define a schema for the document
const userSchema: Schema<User> = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const googleSchema = new Schema(
  {
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model using the schema
const User = mongoose.model<User>("User", userSchema);

export default User;
