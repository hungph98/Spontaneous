import Shipping from "../../models/Shipping";
import {NextResponse} from "next/server";
import connect from "../../../utils/db";

export const POST = async (request) => {
    const body = await request.json();

    const newShipping = await  Shipping(body);

    try {
        await connect();

        await newShipping.save();

        return new NextResponse('Create Shipping Successfully!')
    } catch (err) {
        return new NextResponse(err.message)
    }
}

export const GET = async (NextRequest) => {
    try {
        await connect();

        const data = await Shipping.find();

        return new NextResponse(JSON.stringify({ data}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}
