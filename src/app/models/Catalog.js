import mongoose from "mongoose";

const CatalogSchema = new mongoose.Schema (
    {
        // slug: {
        //   type: String,
        //   required: true,
        //   unique: true
        // },
        title: {
            type: String,
            unique: true,
            required: true,
        },
        image: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Catalog || mongoose.model("Catalog", CatalogSchema)