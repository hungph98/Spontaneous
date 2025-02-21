"use client"

import Image from "next/image";
import leftArrow from '../../../public/arrow/left-arrow.png';
import Link from "next/link";
import {useEffect, useState} from "react";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/catalog`);
            const data = await res.json();

            setProducts(data)
        };

        fetchData();
    }, []);

    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <div className={'mt-32'}>
                <Link href={'/'}>
                    <Image src={leftArrow}
                           alt={'left-arrow'}
                           width={40}
                    />
                </Link>
            </div>
            <div className={''}>
                <span className={'text-5xl font-500'}>All</span>
                <span className={'text-5xl p-2 font-500'}>/</span>
                <span className={'text-8xl font-500'}>Products</span>
                <div className={'mt-10'}>
                    <div className={'grid grid-cols-4 gap-4'}>
                        {
                            products.map((product) => (

                                <div className="col-span-1 border h-40 rounded-lg flex items-center" key={product._id}>
                                    <div className={'flex flex-col'}>
                                        <span className={'mt-12 ml-8 text-lg'}>
                                            {product.title}
                                        </span>
                                        <Link href={'/product/' + product._id}>
                                            <button className={'mt-2 border bg-slate-200 rounded-lg p-2 ml-12'}>Learn more</button>
                                        </Link>
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

export default ProductPage