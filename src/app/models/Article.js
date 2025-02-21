import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
        },
        detail: {
            type: String,
        },
        specification: {
            type: String,
        }
    }
)

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema)