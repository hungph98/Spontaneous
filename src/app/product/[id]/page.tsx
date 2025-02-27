"use client"

import React, {useEffect, useState} from "react";
import ProductImage from "@/components/products/product/ProductImage";
import moment from "moment";
import QuantitySelector from "@/components/selector/QuantitySelector";
import Link from "next/link";
import ThisPiece from "@/components/about/ThisPiece";
import AboutProduct from "@/components/about/AboutProduct";
import {useParams} from "next/navigation";

interface Product {
    _id: string;
    name: string;
    price: number;
}

interface CartItem {
    productId: string;
    quantity: number;
}

interface Product {
    title: string;
    description: string;
    price: number;
    tax: { value: number };
    shipping: { shipping_fee: number };
}

interface Tax {
    value: number
}

interface Shipping {
    title: string;
    shipping_fee: number;
    delivery_date: string;
}

const ProductSinglePage = ({params}: { params: { id: string } }) => {
    const {id} = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>();
    const [tax, setTax] = useState<Tax | null>();
    const [shipping, setShipping] = useState<Shipping | null>();
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resProduct = await fetch(`/api/product/${id}`);
                const productItem = await resProduct.json();
                const resTax = await fetch(`/api/tax/${productItem.data.tax_id}`);
                const taxItem = await resTax.json();
                const resShipping = await fetch(`/api/shipping/${productItem.data.shipping_id}`);
                const shippingItem = await resShipping.json();

                if (!resProduct.ok || !resTax.ok || !resShipping.ok) {
                    return new Error('Failed to fetch products');
                }

                if (!productItem.data || productItem.data.length === 0
                    || !taxItem.data || taxItem.data.length === 0
                    || !shippingItem.data || shippingItem.data.length === 0
                ) {
                    return new Error('No products found');
                }

                setProduct(productItem.data);
                setTax(taxItem.data);
                setShipping(shippingItem.data);
                setImages(productItem.data.image);
            } catch (err) {
                return null;
            } finally {
                setLoading(false)
            }
        };
        fetchData().then(() => {
            console.log('oki')
        });
    }, []);


    const getDateToday = () => {
        return moment().format("YYYY-MM-DD");
    }

    const arriveShipping = (date: string, days: string) => {
        return moment(date).add(days, "days").format("YYYY-MM-DD");
    }

    const formatDate = (isoString: string) => {
        return moment(isoString).format("dddd, MMMM DD, YYYY")
    }

    const dateArrived = formatDate(arriveShipping(getDateToday(), shipping ? shipping.delivery_date : '0'));

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity)
    }

    const addProductToCart = async (item: Product, qty: number) => {
        const product: CartItem[] = [{
            productId: item._id,
            quantity: qty,
        }];

        const response = await fetch("/api/cart", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product),
        });

        const data = await response.json();
        setCart(data.cart);
        localStorage.setItem("cart", JSON.stringify(data.cart))
    }

    if (loading) return <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>;

    return (
        <div>
            <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
                {
                    !product ? <p>Loading product details...</p>
                        :
                        <div className={'grid grid-cols-12 gap-4'}>
                            <div className={'col-span-6'}>
                                <ProductImage items={images}/>
                            </div>
                            <div
                                className={'col-span-6 flex flex-col justify-between p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'}>
                                <div className={'flex flex-col'}>
                                    <span className={'text-2xl font-semibold'}>{product?.title}</span>
                                    <span>{product?.description}</span>
                                    <span className={'mt-8 flex'}>$ {product?.price ? product.price - (tax?.value ? tax.value : 0) + (shipping?.shipping_fee ? shipping.shipping_fee : 0) : 0}
                                        <p className={'line-through ml-2'}>$ {product.price}</p>
                                </span>
                                    <span>{shipping?.title}</span>
                                    <div>
                                        <span>Arrives in {dateArrived}</span>
                                    </div>
                                </div>
                                <div className={'flex justify-between items-center mt-[120px]'}>
                                    <QuantitySelector initialQuantity={1} onChange={handleQuantityChange}/>
                                    <button
                                        className={'border h-[45px] w-[420px] text-white bg-[#ea1917] hover:bg-white hover:text-black'}
                                        style={{'transition': 'all .4s ease-in-out'}}
                                        onClick={() => addProductToCart(product, quantity)}>Add to cart
                                    </button>
                                </div>
                                <div className={'mt-8'}>
                                    <h2>Shop With Confidence</h2>
                                    <p>Enjoy complimentary design advice. <Link href={'/design-services'}
                                                                                className={'underline'}>Get
                                        Started</Link></p>
                                    <p>Returns made easy. <Link href={'/src/app/help/article/return_policy'}
                                                                className={'underline'}>See Details</Link></p>
                                    <p></p>
                                </div>
                                <div className={'mt-8'}>
                                    <h2>Need Assistance?</h2>
                                    <div className={'flex gap-4 '}>
                                        <span className={'underline'}>Call us</span>
                                        <span className={'underline'}>Chat Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <ThisPiece/>
            </div>
            <AboutProduct product={product}/>
        </div>

    )
}

export default ProductSinglePage