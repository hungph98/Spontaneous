import { promises as fs } from "fs";
import path from "path";
import {NextResponse} from "next/server";
import Product from "../../models/Product";
import Tax from "../../models/Tax";
import * as url from "node:url";

const CART_FILE = path.join(process.cwd(), "cart.json");

// Function to read the cart
const readCart = async () => {
    try {
        const res = await fs.readFile(CART_FILE, "utf8");
        return JSON.parse(res);
    } catch (error) {
        return []; // Return an empty cart if file doesn't exist
    }
};

// Function to write the cart
const writeCart = async (cart) => {
    await fs.writeFile(CART_FILE, JSON.stringify(cart, null, 2));
};

// Handle POST request (Add products to cart)
export const POST = async (request) => {
    try {
        const body = await request.json();

        if (!Array.isArray(body)) {
            return new NextResponse(JSON.stringify({ error: "Invalid data format. Expected an array." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        let cart = await readCart();

        for (const product of body) {
            const { productId, quantity } = product;

            if (!productId || !quantity) {
                throw new Error("Missing product fields");
            }

            const existingProduct = cart.find((item) => item.item.productId === productId);
            const productDetails = await Product.findById(productId).select("title description price tax_id image").lean();
            const taxByProduct = await Tax.findById(productDetails.tax_id).select("value").lean();
            const image = productDetails.image.map((url, index) => ({
                key: index + 1,
                value: url
            }));

            if (!productDetails) {
                return new NextResponse(JSON.stringify({error: "Product not found"}), {status: 404});
            }

            if (existingProduct) {
                existingProduct.item.quantity += quantity;
            } else {
                cart.push({
                    item: {
                        productId: productId,
                        title: productDetails.title,
                        description: productDetails.description,
                        price: productDetails.price,
                        amount: taxByProduct.value,
                        quantity: quantity,
                        image: image[0].value,
                    }
                });
            }
        }

        await writeCart(cart);

        return new NextResponse(JSON.stringify({ message: "Products added to cart", cart }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

// Handle GET request (Retrieve cart)
export const GET = async () => {
    try {
        const cart = await readCart();

        const { totalQuantity, totalPrice, totalPriceBeforeAmount, totalAmount } = cart.reduce(
            (acc, product) => {
                acc.totalQuantity += product.item.quantity;
                acc.totalPrice += product.item.price * product.item.quantity;
                acc.totalPriceBeforeAmount += product.item.price * product.item.quantity - product.item.amount;
                acc.totalAmount += product.item.amount;
                return acc;
            },
            { totalQuantity: 0, totalPrice: 0, totalPriceBeforeAmount: 0, totalAmount: 0}
        );

        return new NextResponse(JSON.stringify({cart, totalQuantity, totalPrice, totalPriceBeforeAmount, totalAmount }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Failed to load cart" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const DELETE = async (request) => {
    try {
        const { productId } = await request.json();
        const cart = await readCart();

        if (!productId) {
            return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
        }
        const itemIndex = cart.findIndex((item) => item.item.productId === productId);

        if (itemIndex === -1) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }

        cart.splice(itemIndex, 1);

        await writeCart(cart);

        return NextResponse.json({ message: 'Item removed', cart });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};