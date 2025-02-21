import connect from "../../../../utils/db";
import {NextResponse} from "next/server";
import Tax from "../../../models/Tax";

export const GET = async (NextRequest, {params}) => {
    const {id} = await params;

    try {
        await connect();

        const data = await Tax.findById(id);

        return new NextResponse(JSON.stringify({data}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}