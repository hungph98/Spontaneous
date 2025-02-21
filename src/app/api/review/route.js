import connect from "../../../utils/db";
import {NextResponse} from "next/server";
import Reviews from "../../models/Reviews";


export const POST = async (request) => {
    const body = await request.json();
    const { customerId, productId, rating, comment } = body;

    if (!productId || !rating) {
        throw new Error("Missing product fields");
    }

    const newPost = await Reviews(body);

    try {
        await connect();

        await newPost.save();

        return new NextResponse(JSON.stringify({ data: newPost}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}

export const GET = async (NextRequest) => {
    try {
        await connect();

        const reviews = await Reviews.find();
        const totalReviews = reviews.length;
        const {totalRating} = reviews.reduce(
            (sum, review) => {
                sum.totalRating += review.rating;
                return sum;
            },
            { totalRating: 0}
        );

        const averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : 0;

        return new NextResponse(JSON.stringify({ data: reviews, totalReviews, averageRating}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}