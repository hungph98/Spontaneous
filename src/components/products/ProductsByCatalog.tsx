"use client"

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import productImage from '../../../public/product.png';
import Modal from "@/components/modal/Modal";


const ProductsByCatalog = ({id}: {id: string}) => {
    const [products, setProducts] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [cart, setCart] = useState([]);

    const handleOpenModal = () => {
        setIsOpenModal(true)
    };

    const handleCloseModal = () => {
        setIsOpenModal(false)
    };

    const addProductToCart = async (item) => {
        const product = [{
            productId: item._id,
            quantity: 1,
        }];

        const response = await fetch("/api/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });

        const data = await response.json();
        setCart(data.cart);
        localStorage.setItem("cart", JSON.stringify(data.cart))
    }


    useEffect(() => {
        const fetchData = async () => {
            const productItems = await fetch(`http://localhost:3000/api/product?catalog_id=${id}`);
            const res = await productItems.json();

            setProducts(res.data)
        };


        fetchData();
    }, []);

    return (
        <div className={'grid grid-cols-3 gap-8'}>
            {
                products.map((product) => (
                    <div className="col-span-1 border h-[500px] rounded-lg flex" key={product._id}>
                        <div className={'flex flex-col p-2 '}>
                            <div className={'h-2/3 bg-gray-200'}>
                                <div className={'relative w-full h-80'}>
                                    <Link href={'/product/' + product._id}>
                                        <Image src={product.image[0] ?? productImage}
                                               alt={'product'}
                                               fill
                                               sizes={'25vw'}
                                               className={'absolute object-cover rounded-md z-10 transition-opacity easy duration-500'}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className={'flex flex-col h-1/3 mt-2'}>
                                <span className={'font-bold'}>{product.title}</span>
                                <span>{product.description}</span>
                                <span>$ {product.price}</span>
                            </div>
                            <div className={'mt-1 flex justify-between'}>
                                <button onClick={handleOpenModal} className={'border p-3 rounded-full w-[150px]'}>Quickview</button>
                                <Modal isOpen={isOpenModal} onClose={handleCloseModal} item={product}/>
                                <button onClick={() => addProductToCart(product)}
                                        className={'border p-3 rounded-full text-white bg-[#ea1917] hover:bg-white hover:text-black w-[150px]'}
                                        style={{'transition': 'all .4s ease-in-out'}}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsByCatalog