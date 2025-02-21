import {NextResponse} from "next/server";
import connect from "../../../utils/db";
import Article from "../../models/Article";

export const POST = async (request) => {
    const body = await request.json();
    const { productId, overview, detail, specification } = body;

    if ( !productId || !overview || !detail || !specification) {
        throw new Error("Missing product fields");
    }

    const newArticle = await Article(body);

    try {
        await connect();

        await newArticle.save();

        return new NextResponse(JSON.stringify({ data: newArticle}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}