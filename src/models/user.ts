import mongoose, { Schema, Document } from 'mongoose';

// Define an interface representing the document's schema
interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

// Define a schema for the document
const userSchema: Schema<User> = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
    },

}, {
    timestamps: true
});

// Create a Mongoose model using the schema
const User = mongoose.model<User>('User', userSchema);

export default User;
