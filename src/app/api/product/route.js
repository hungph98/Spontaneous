import Product from "../../models/Product";
import {NextResponse} from "next/server";
import connect from "../../../utils/db";

export const POST = async (request) => {
    const body = await request.json();

    const newProduct = new Product(body);

    try {
        await connect();

        await newProduct.save();

        return new NextResponse('Create Successfully!');
    } catch (err) {
        return new NextResponse(err.message)
    }
}

export const GET = async (NextRequest) => {
    const { searchParams } = new URL(NextRequest.url);
    const paramsCatalog = searchParams.get('catalog_id')
    const paramsTitle = searchParams.get('title')

    try {
        await connect();

        if (paramsCatalog) {
            const data = await Product.find({catalog_id: paramsCatalog});

            if (!data || data.length === 0) {
                return new NextResponse.json({ message: 'No catalogs found' }, { status: 404 });
            }

            return new NextResponse(JSON.stringify({ data}), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }
        if (paramsTitle) {
            const data = await Product.find({title: {$regex: paramsTitle, $options: "i"}});

            if (!data || data.length === 0) {
                return new NextResponse.json({ message: 'No products found' }, { status: 404 });
            }

            return new NextResponse(JSON.stringify({ data}), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            const data = await Product.find();
            return new NextResponse(JSON.stringify({ data}), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (err) {
        return new NextResponse(err.message)
    }
}