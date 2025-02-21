"use client"

import Image from "next/image";
import imageProduct from '../../../public/product.png';
import {useEffect, useState} from "react";
import QuantitySelector from "@/components/selector/QuantitySelector";
import ItemInCart from "@/components/cart/item/ItemInCart";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState([]);
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch("/api/cart");
                const data = await response.json();

                setCart(data.cart);
                setTotalQuantity(data.totalQuantity);
            } catch (error) {
                return null;
            }
        };
        fetchCart();
    }, []);

    const quantityChange = (newQuantity) => {
        return newQuantity;
    }

    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 '}>
            <h1 className={'text-3xl font-300'}>Your Shopping Cart (<span className={'text-[#ea1917]'}>{totalQuantity}</span>)</h1>
            <div className={'grid grid-cols-3 gap-8 mt-4'}>
                {
                    cart.map((item) => (
                        <div className={'col-span-2'}>
                            <div className={'p-2 mb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'}
                                 key={item.productId}>
                                <div className={'grid grid-cols-4 gap-4'}>
                                    <div className={'col-span-1'}>
                                        <Image src={imageProduct}
                                               alt={'image-product'}
                                               height={200}
                                               width={200}
                                               className={'rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'}
                                        />
                                    </div>
                                    <div className={'col-span-3 p-2 flex flex-col justify-between'}>
                                        <ItemInCart productId={item.productId}/>
                                        <QuantitySelector initialQuantity={item.quantity} onChange={quantityChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className={'border p-2'}>
                    Total
                </div>
            </div>
        </div>
    )
}

export default Cart