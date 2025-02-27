"use client"

import {useEffect, useState} from "react";

interface Product {
    title: string,
    description: string,
    price: number,
}

interface Shipping {
    title: string,
    shipping_fee: number,
    delivery_date: string,
}

interface Tax {
    value: number
}

// @ts-ignore
const ItemInCart = ({productId}) => {
    const [product, setProduct] = useState<Product>()
    const [shipping, setShipping] = useState<Shipping>()
    const [tax, setTax] = useState<Tax>()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const resProduct = await fetch(`api/product/${productId}`);
                const dataProduct = await resProduct.json();
                const resShipping = await fetch(`api/shipping/${dataProduct.data.shipping_id}`);
                const dataShipping = await resShipping.json();
                const resTax = await fetch(`api/tax/${dataProduct.data.tax_id}`);
                const dataTax = await resTax.json();

                setProduct(dataProduct.data);
                setShipping(dataShipping.data);
                setTax(dataTax.data);
            } catch (error) {
                return null;
            }
        }

        if (productId) {
            fetchItem().then(() => {
                console.log('oki')
            })
        }
    },[productId])

    if (!product || !shipping || !tax) {
        return <p>Loading product details...</p>;
    }

    return (
        <div>
            <h2 className={'text-2xl'}>{product.title}</h2>
            <p className={'mt-2'}>{product.description}</p>
            {
                shipping.title === 'Global Shipping' ?
                    <div>
                        <p>Shipping Fee: $ {shipping.shipping_fee}</p>
                    </div>
                    :
                    <p>di </p>
            }
            <p>Amount: $ {tax.value}</p>
            <p className={''}>Price: $ {product.price}</p>
        </div>
    )
}

export default ItemInCart