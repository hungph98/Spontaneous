"use client"

import Image from "next/image";
import imageProduct from '../../../public/product.png';
import {useEffect, useState} from "react";
import QuantitySelector from "@/components/selector/QuantitySelector";
import ItemInCart from "@/components/cart/item/ItemInCart";

interface CartItem {
    item: any;
    productId: string,
    quantity: number,
}

const Cart = () => {
    const [carts, setCarts] = useState<CartItem[]>([]);
    const [totalQuantity, setTotalQuantity] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [priceBeforeAmount, setPriceBeforeAmount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();

                if (!response.ok) {
                    return;
                }

                if (!data.cart || data.cart.length === 0
                    || !data.totalQuantity || data.totalQuantity < 0
                    || !data.totalPrice || data.totalPrice < 0
                    || !data.totalAmount || data.totalAmount < 0
                    || !data.totalPriceBeforeAmount || data.totalPriceBeforeAmount < 0
                ) {
                    return;
                }

                setCarts(data.cart);
                setTotalQuantity(data.totalQuantity);
                setTotalPrice(data.totalPrice);
                setTotalAmount(data.totalAmount);
                setPriceBeforeAmount(data.totalPriceBeforeAmount);
            } catch (error) {
                return null;
            } finally {
                setLoading(false)
            }
        };
        fetchCart().then(() => {
            return
        })
    }, []);

    const quantityChange = (newQuantity: number) => {
        return newQuantity;
    }

    if (loading) return <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>;

    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <h1 className={'text-3xl font-300'}>Your Shopping Cart (<span
                className={'text-[#ea1917]'}>{totalQuantity}</span>)</h1>
            <div className={'grid grid-cols-3 gap-8 mt-4'}>
                <div className={'col-span-2'}>
                    {
                        carts.map((cart) => (
                            <div className={'p-2 mb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'}
                                 key={cart.item.productId}>
                                <div className={'grid grid-cols-4 gap-4'}>
                                    <div className={'col-span-1'}>
                                        <Image src={cart.item.image || imageProduct}
                                               alt={'image-product'}
                                               height={200}
                                               width={200}
                                               className={'rounded-lg'}
                                        />
                                    </div>
                                    <div className={'col-span-3 p-2 flex flex-col justify-between'}>
                                        <ItemInCart productId={cart.item.productId}/>
                                        <QuantitySelector initialQuantity={cart.item.quantity}
                                                          onChange={quantityChange}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={'col-span-1 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg h-[500px] w-[90%]'}>
                    <h1 className={'text-4xl'}>Total</h1>
                    <div className={'h-[1px] mt-4'} style={{'background': 'gray'}}/>
                    <div className={'flex flex-col justify-between mt-4'} style={{'height': '80%'}}>
                        <div className={'flex flex-col justify-between gap-2'}>
                            <div className={'flex justify-between items-center text-xl'}>
                                <h1 >Price</h1>
                                <span className={'mr-4'}>{priceBeforeAmount} $</span>
                            </div>
                            <div className={'flex justify-between items-center text-xl'}>
                                <h1 >Total Amount</h1>
                                <span className={'mr-4'}>{totalAmount} $</span>
                            </div>
                        </div>
                        <h1 className={'border'}>Coupon</h1>
                        <div className={'flex flex-col justify-center'}>
                            <div className={'h-[1px] mt-4'} style={{'background': 'gray'}}/>
                            <div className={'flex justify-between items-center text-2xl mt-4'}>
                                <h1 >Grand Total </h1>
                                <span className={'mr-4'}>{totalPrice} $</span>
                            </div>
                            <button
                                className={'text-2xl mt-4 border p-3 rounded-full text-white bg-[#ea1917] hover:bg-white hover:text-black'}
                                style={{'transition': 'all .4s ease-in-out'}}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart