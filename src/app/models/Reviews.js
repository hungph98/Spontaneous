import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema (
    {
        customerId: {
            type: String,
        },
        productId: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: true,
        },
        comment: {
            type: String,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Reviews || mongoose.model("Reviews", ReviewsSchema)