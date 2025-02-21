import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        catalog_id: {
            type: String
        },
        shipping_id: {
            type: String
        },
        tax_id: {
            type: String
        },
        price : {
            type: Number,
            required: true
        },
        image: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)