import mongoose from "mongoose";

const DecorCategoriesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        trending: {
            type: Boolean,
            default: false,
        }
    }
)

export default mongoose.models.DecorCategories || mongoose.model("DecorCategories", DecorCategoriesSchema)