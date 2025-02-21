"use client"

import Image from "next/image";
import leftArrow from '../../../public/arrow/left-arrow.png';
import Link from "next/link";
import {useEffect, useState} from "react";
import catalogImage from "../../../public/category.png"

const ProductPage = () => {
    const [catalogs, setCatalogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/catalog`);
            const data = await res.json();

            setCatalogs(data)
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
                <span className={'text-8xl font-500'}>Catalogs</span>
                <div className={'mt-10'}>
                    <div className={'grid grid-cols-4 gap-4'}>
                        {
                            catalogs.map((catalog) => (
                                <div className="col-span-1 border h-40 rounded-lg flex items-center" key={catalog._id}>
                                    <div className={'relative w-full h-[160px]'}>
                                        <Image src={catalog.image || catalogImage}
                                               alt={'image'}
                                               fill
                                               className={'w-full h-full object-cover rounded-lg opacity-[0.4] hover:opacity-[1]'}
                                        />
                                        <div className={'flex flex-col absolute'}>
                                            <span className={'mt-12 ml-8 text-xl font-[500]'}>
                                                {catalog.title}
                                            </span>
                                            <Link href={'/catalog/' + catalog._id}>
                                                <button className={'mt-2 border bg-slate-200 rounded-lg p-2 ml-12'}>Learn more</button>
                                            </Link>
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

export default ProductPage