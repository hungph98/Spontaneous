import mongoose from "mongoose";

const UserSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role : {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
        }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema)