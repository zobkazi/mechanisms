// Import mongoose
import mongoose, { Schema, Document } from "mongoose";

// Define interface for RegistrationHistory document
interface IRegistrationHistory extends Document {
  email: string;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}

// Define schema for RegistrationHistory
const RegistrationHistorySchema: Schema = new Schema({
  email: { type: String, required: true },
  ipAddress: { type: String, required: true },
  userAgent: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create and export RegistrationHistory model
const RegistrationHistory = mongoose.model<IRegistrationHistory>(
  "RegistrationHistory",
  RegistrationHistorySchema
);

export default RegistrationHistory;
