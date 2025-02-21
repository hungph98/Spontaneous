import mongoose from "mongoose";

const ShippingSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            enum: ['Free Shipping', 'Global Shipping'],
            required: true
        },
        shipping_fee: {
            type: Number,
        },
        delivery_date :{
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Shipping || mongoose.model("Shipping", ShippingSchema)