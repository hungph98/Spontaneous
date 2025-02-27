import mongoose from 'mongoose';

const CouponSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
    }
)

export default mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema)