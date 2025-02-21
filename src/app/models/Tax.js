import mongoose from "mongoose";

const TaxSchema = new mongoose.Schema(
    {
        tax_name: {
            type: String,
            required: true,
        },
        tax_type: {
            type: String,
            enum: ['percent', 'fixed'],
            required: true
        },
        value: {
            type: Number,
            required: true,
        },
    }
)

export default mongoose.models.Tax || mongoose.model("Tax", TaxSchema)