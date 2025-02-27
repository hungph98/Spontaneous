import DecorCategories from "../../../models/DecorCategories";
import connect from "../../../../utils/db";
import {NextResponse} from "next/server";

export const POST = async (request) => {
    const body = await request.json();
    const {title, description, image, trending} = body;

    if (!title) {
        throw new Error("Missing product fields");
    }

    const newDecorCategories = new DecorCategories(body);

    try {
        await connect();

        await newDecorCategories.save();

        return new NextResponse(JSON.stringify({data: newDecorCategories}), {
            status: 200,
            headers: {"Content-Type": "application/json"},
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}

export const GET = async (NextRequest) => {

    try {
        await connect();

        const data = await DecorCategories.find();
        return new NextResponse(JSON.stringify({data: data}), {
            status: 200,
            headers: {"Content-Type": "application/json"},
        });


    } catch (err) {
        return new NextResponse(err.message)
    }
}