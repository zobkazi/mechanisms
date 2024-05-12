// Import mongoose
import mongoose, { Schema, Document } from "mongoose";

// Define interface for LoginHistory document
interface ILoginHistory extends Document {
  email: string;
  action: string;
  timestamp: Date;
}

// Define schema for LoginHistory
const LoginHistorySchema: Schema = new Schema({
  email: { type: String, required: true },
  action: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create and export LoginHistory model
const LoginHistory = mongoose.model<ILoginHistory>(
  "LoginHistory",
  LoginHistorySchema
);

export default LoginHistory;
