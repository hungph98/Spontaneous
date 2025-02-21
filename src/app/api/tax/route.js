import Tax from "../../models/Tax";
import {NextResponse} from "next/server";
import connect from "../../../utils/db";

export const POST = async (request) => {
    const body = await request.json();

    const newTax = new Tax(body)

    try {
        await connect();

        await newTax.save();

        return new NextResponse('Successfully!')
    } catch (err) {
        return new NextResponse(err.message)
    }
}