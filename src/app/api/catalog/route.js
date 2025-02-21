import Catalog from "../../models/Catalog";
import {NextResponse} from "next/server";
import connect from "../../../utils/db";


export const POST = async (request) => {
    const body = await request.json();

    const newCatalog = new Catalog(body);

    try {
        await connect();

        await newCatalog.save();

        return new NextResponse('Catalog Successfully!');
    } catch (err) {
        return new NextResponse(err.message)
    }
}

export const GET = async (NextRequest) => {
    const { searchParams } = new URL(NextRequest.url);
    const params = searchParams.get('limit')

    try {
        await connect();

        if (params) {
            const catalogItems = await Catalog.find().limit(params).skip(1);
            return new NextResponse(JSON.stringify(catalogItems));
        } else {
            const catalogItems = await Catalog.find();
            return new NextResponse(JSON.stringify(catalogItems));
        }
    } catch (err) {
        return new NextResponse(err.message)
    }
}