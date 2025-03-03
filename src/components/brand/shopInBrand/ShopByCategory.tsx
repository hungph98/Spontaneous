"use client"

import Categories from "@/components/filter/Categories";
import SpecialOffers from "@/components/filter/SpecialOffers";
import PricePerItem from "@/components/filter/PricePerItem";
import ShopByColor from "@/components/filter/ShopByColor";
import CustomerRating from "@/components/filter/CustomerRating";
import Link from "next/link";
import productImage from "../../../../public/product.png";
import Modal from "@/components/modal/Modal";
import {SetStateAction, useEffect, useState} from "react";
import Image from "next/image";

interface Product {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: string[];
}

// @ts-ignore
const ShopByCategory = ({title}) => {
    const [priceFilter, setPriceFilter] = useState({min: 0, max: 1000000});
    const [colorFilter, setColorFilter] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleFilterPrice = (newFilter: SetStateAction<{ min: number; max: number; }>) => {
        setPriceFilter(newFilter);
    }

    const handleFilterColor = (newColors: SetStateAction<never[]>) => {
        setColorFilter(newColors);
    }

    const handleRatingFilter = (rating: SetStateAction<null>) => {
        setSelectedRating(rating);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/product?title=${title}`);
                const productObj = await response.json();

                if (!response.ok) {
                    return new Error('Failed to fetch products');
                }

                if (!productObj.data || productObj.data.length === 0) {
                    return new Error('No products found');
                }
                setProducts(productObj.data);
            } catch (error) {
                return null;
            }
        };

        fetchProduct()
    }, []);

    const handleOpenModal = () => {
        setIsOpenModal(true)
    };

    const handleCloseModal = () => {
        setIsOpenModal(false)
    };

    return (
        <div className={'mt-10 ml-10 mr-10'}>
            <div className={'grid grid-cols-4 gap-24'}>
                <div className={'col-span-1 ml-10'}>
                    <h1 className={'font-bold'}>Filters</h1>
                    <div className={'h-[1px]'} style={{'background': '#f3f4f6'}}/>
                    <Categories/>
                    <div className={'h-[1px] mr-4 ml-4'} style={{'background': '#f3f4f6'}}/>
                    <SpecialOffers/>
                    <div className={'h-[1px] mr-4 ml-4'} style={{'background': '#f3f4f6'}}/>
                    <PricePerItem onFilter={handleFilterPrice}/>
                    <div className={'h-[1px] mr-4 ml-4'} style={{'background': '#f3f4f6'}}/>
                    <ShopByColor onFilter={handleFilterColor}/>
                    <div className={'h-[1px] mr-4 ml-4'} style={{'background': '#f3f4f6'}}/>
                    <CustomerRating onFilter={handleRatingFilter}/>
                    <div className={'h-[1px] mr-4 ml-4'} style={{'background': '#f3f4f6'}}/>
                </div>
                <div className={'col-span-3'}>
                    <h1 className={'text-3xl'}>{title}</h1>
                    <span className={'ml-2'}>{products.length} Results</span>
                    <div className={'grid grid-cols-4 gap-8 p-2 '}>
                        {
                            products.map((product) => (
                                <div className="col-span-1 flex shadow-[0_3px_10px_rgb(0,0,0,0.2)]" key={product._id}>
                                    <div className={'flex flex-col p-2 '}>
                                        <Link href={'/product/' + product._id}>
                                            <div className={'h-2/3 bg-gray-200'}>
                                                <div className={'relative w-full h-60'}>
                                                    <Image src={product.image[0] ?? productImage}
                                                           alt={'product'}
                                                           fill
                                                           sizes={'25vw'}
                                                           className={'absolute object-cover z-10 transition-opacity easy duration-500'}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className={'flex flex-col h-1/3 mt-2'}>
                                            <span className={'font-bold'}>{product.title}</span>
                                            <span>{product.description}</span>
                                            <span>$ {product.price}</span>
                                        </div>
                                        <div className={'mt-1 flex justify-between'}>
                                            <button onClick={handleOpenModal} className={'underline'}>Quickview</button>
                                            <Modal isOpen={isOpenModal} onClose={handleCloseModal} item={product}/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory