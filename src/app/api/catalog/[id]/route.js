import {NextResponse} from "next/server";
import Catalog from "../../../models/Catalog";
import connect from "../../../../utils/db";

export const GET = async (NextRequest, {params}) => {
    const {id} = await params;

    try {
        await connect();

        const data = await Catalog.findById(id);

        return new NextResponse(JSON.stringify({ data}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        return new NextResponse(err.message)
    }
}