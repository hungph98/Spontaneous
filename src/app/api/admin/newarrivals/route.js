import connect from "../../../../utils/db";
import NewArrivals from "../../../models/New Arrivals";
import {NextResponse} from "next/server";

export const POST = async (request) => {
    const body = await request.json();
    const {title, image} = body;

    if (!title) {
        throw new Error("Missing product fields");
    }

    const newArrivals = new NewArrivals(body);


    try {
        await connect();

        await newArrivals.save();

        return new NextResponse(JSON.stringify({ data: newArrivals}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch ( err) {
        throw new Error(err.message)
    }
}