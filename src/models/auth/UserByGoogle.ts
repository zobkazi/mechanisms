import mongoose, { Schema, Document } from "mongoose";

// Define an interface representing the document's schema
interface UserByGoogleDocument extends Document {
  name: string;
  email: string;
  googleId: string;
}

// Define a Mongoose schema for the document
const userByGoogleSchema: Schema<UserByGoogleDocument> =
  new Schema<UserByGoogleDocument>({
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
    googleId: {
      type: String,
      required: true,
    },
  });

// Create a Mongoose model using the schema
const UserByGoogle = mongoose.model<UserByGoogleDocument>(
  "UserByGoogle",
  userByGoogleSchema
);

export { UserByGoogle, UserByGoogleDocument }; // Export both the model and the document interface separately
