"use client"

import {useEffect, useState} from "react";

const ItemInCart = ({productId}) => {
    const [product, setProduct] = useState()
    const [shipping, setShipping] = useState()
    const [tax, setTax] = useState()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const resProduct = await fetch(`api/product/${productId}`);
                const dataProduct = await resProduct.json();
                const resShipping = await fetch(`api/shipping/${dataProduct.data.shipping_id}`);
                const dataShipping = await resShipping.json();
                const resTax = await fetch(`api/tax/${dataProduct.data.tax_id}`);
                const dataTax = await resTax.json();

                setProduct(dataProduct);
                setShipping(dataShipping);
                setTax(dataTax);
            } catch (error) {
                return null;
            }
        }

        if (productId) {
            fetchItem()
        }
    },[productId])

    if (!product || !shipping || !tax) {
        return <p>Loading product details...</p>;
    }

    return (
        <div>
            <h2 className={'text-2xl'}>{product.data.title}</h2>
            <p className={'mt-2'}>{product.data.description}</p>
            {
                shipping.data.title === 'Global Shipping' ?
                    <div>
                        <p>Shipping Fee: $ {shipping.data.shipping_fee}</p>
                    </div>
                    :
                    <p>di </p>
            }
            <p>Amount: $ {tax.data.value}</p>
            <p className={''}>Price: $ {product.data.price}</p>
        </div>
    )
}

export default ItemInCart