"use client"

import Image from "next/image";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import QuantitySelector from "@/components/selector/QuantitySelector";
import productImage from '../../../public/product.png'

type CartItem = {
    length: number;
    productId: string,
    quantity: number,
    price: number,
    title: string,
    description: string,
    map(param: (item: any) => any): any;
}

const CartModal = () => {
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    // @ts-ignore
    const [cart, setCart] = useState<CartItem>([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const session = useSession();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();

                if (!response.ok) {
                    return;
                }

                if (!data.cart || data.cart.length === 0
                    || !data.totalPrice || data.totalPrice === 0
                    || !data.totalAmount || data.totalAmount === 0
                ) {
                    return;
                }

                setCart(data.cart)
                setTotalQuantity(data.totalQuantity);
                setTotalPrice(data.totalPrice);
                setTotalAmount(data.totalAmount);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch cart", error);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    const handleQuantityChange = (newQuantity: any) => {
        return newQuantity
    }

    const removeItem = async (productId: any) => {
        const response = await fetch("/api/cart", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({productId}),
        });

        if (!response.ok) {
            return;
        }

        const data = await response.json();
        setCart(data.cart);
        localStorage.setItem("cart", JSON.stringify(data.cart))
    }

    if (loading) return <p>Loading cart...</p>;

    return (
        <div
            className={'cart-modal-content w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-10 flex flex-col gap-6 z-20'}
            style={{'right': '-152px'}}
        >
            {
                cart.length == 0 ?
                    <div>
                        <h2 className={'text-xl'}>Shopping Cart</h2>
                        <p>Oh-no! Looks like your cart is empty.</p>
                        {
                            session.status == 'unauthenticated' || session.status == 'loading' ?
                                <div>
                                    <p>Here are some options to get you started:</p>
                                    <p>
                                        <Link href={'/login'} className={'underline'}>Login </Link>
                                        to view your saved items
                                    </p>
                                    <p>
                                        Start saving with
                                        <Link href={'/sales'} className={'underline'}> Daily Sales</Link>
                                    </p>
                                </div>
                                : ''
                        }

                    </div>
                    :
                    <div>
                        <h2 className={'text-xl'}>Shopping Cart</h2>
                        {
                            cart.map((itemCart) => (
                                <div className={'flex flex-col gap-8 mt-4'} key={itemCart.item.productId}>
                                    <div className={'flex gap-4 border p-3'}>
                                        <Image
                                            src={itemCart.item.image || productImage}
                                            alt={'product-image'}
                                            width={146}
                                            height={146}
                                            className={'object-cover rounded-md'}
                                        />
                                        <div className={'flex flex-col justify-between w-full'}>
                                            <div className={''}>
                                                <div className={'flex items-center justify-between'}>
                                                    <div className={'w-[300px]'}>
                                                        <p className={'font-semibold'}>{itemCart.item.title}</p>
                                                        <p>{itemCart.item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'flex justify-between text-sm'}>
                                                <span className={'text-base'}>Price: {itemCart.item.price}</span>
                                            </div>
                                            <div className={'flex justify-between text-sm mt-4'}>
                                                <span className={'text-base flex items-center'}>
                                                    <p className={'mr-4'}>Qty: </p>
                                                    <QuantitySelector initialQuantity={itemCart.item.quantity} onChange={handleQuantityChange}/>
                                                </span>
                                                <button
                                                    className={'text-blue-500 text-base'}
                                                    onClick={() => removeItem(itemCart.item.productId)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className={'mt-10'}>
                            <div className={'flex items-center justify-between font-semibold'}>
                                <span className={''}>Subtotal: {totalPrice}</span>
                                <span className={''}>Amount: {totalAmount}</span>
                            </div>
                            <p className={'text-gray-500 text-sm mt-2 mb-4'}>
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className={'flex justify-between text-sm'}>
                                <button className={'rounded-md ring-1 ring-gray-300'}>
                                    <Link href={'/cart'} className={'py-3 px-4'}>
                                        View Cart
                                    </Link>
                                </button>
                                <button
                                    className={'rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75'}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CartModal