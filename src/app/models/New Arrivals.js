import mongoose from 'mongoose';

const NewArrivalsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        }
    }
)

export default mongoose.models.NewArrivals || mongoose.model("NewArrivals", NewArrivalsSchema)