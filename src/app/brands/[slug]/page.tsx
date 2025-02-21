"use client"

import Image from "next/image";
import likeIcon from '../../../../public/brands/like.png';
import img from '../../../../public/brands/img.png';
import img1 from '../../../../public/brands/img_1.png';
import React, {useEffect, useState} from "react";
import ShopByCategory from "@/components/brand/shopInBrand/ShopByCategory";
import {usePathname} from "next/navigation";

const Contents = [
    {
        title: 'The Gravena Collection',
        description: 'Gravena offers a modern, linear style with large rectangular bowls',
        image: 'https://assets.wfcdn.com/im/32184163/compr-r85/1486/148687717/default_name.jpg'
    },
    {
        title: 'The Nesta Collection',
        description: 'The Nesta series is defined by square bowls and sharp zero-radius corners.',
        image: 'https://assets.wfcdn.com/im/44100779/compr-r85/1486/148686961/default_name.jpg'
    },
    {
        title: 'The Parmi Collection',
        description: 'Parmi maintains a classic look that will complement any kitchen.',
        image: 'https://assets.wfcdn.com/im/16202611/compr-r85/1486/148687030/default_name.jpg'
    },
    {
        title: 'The Tirana Collection',
        description: 'Tirana is the new landmark in overmount design.',
        image: 'https://assets.wfcdn.com/im/57035722/compr-r85/1486/148687204/default_name.jpg'
    }
]
const BrandPages = () => {
    const pathname = usePathname();
    const [product, setProduct] = useState();
    const [catalog, setCatalog] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/product?title=${pathname.split("/")[2]}`);
                const productObj = await response.json();
                const res = await fetch(`/api/catalog/${productObj.data[0].catalog_id}`);
                const dataCatalog = await res.json();

                if (!response.ok || !res.ok) {
                    return new Error('Failed to fetch products');
                }

                if (!productObj.data[0] || productObj.data[0].length === 0
                    || !dataCatalog.data || productObj.data.length === 0) {
                    return new Error('No products found');
                }

                setProduct(productObj.data);
                setCatalog(dataCatalog.data);
            } catch (error) {
                return null;
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>;

    return (
        <div>
            <div className={'mr-10 ml-10 mt-10'}>
                <Image src={`https://assets.wfcdn.com/im/65671481/c_crop-h600-w1600%5Ecompr-r85/1486/148686437/picture_desktop_148686437.jpg`}
                       alt={'image'}
                       width={2000}
                       height={100}
                />
            </div>
            <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col items-center'}>
                <h1 className={'uppercase text-center text-xl'}>Spontaneous Presents</h1>
                <button className={'w-[180px] h-[55px] border flex items-center justify-evenly mt-14'}>
                    <Image src={likeIcon}
                           alt={'like'}
                           width={25}
                           height={25}
                   />
                    Follow this Brand
                </button>
                <h1 className={'mt-10 mr-40 ml-40 text-center'}>Ruvati's team is obsessed with beautiful products that accentuate any home, inspired design that is attentive to every detail while enhancing usability, and unmatched quality that lasts a lifetime.</h1>
                <video controls className={'w-full h-full mb-20 mt-10'}>
                    <source src={'https://assets.wfcdn.com/dm/video/e154864e-7abe-7fa4-3768-921191b20cdf/149275.mp4'} type={'video/mp4'}/>
                </video>
                <div className={'flex flex-col items-center'}>
                    <h1 className={'text-xl text-center'}>More Than Just a Sink</h1>
                    <p className={'text-center mr-40 ml-40 mt-10'}>Ruvati crafts a unique selection of quality sinks and faucets that evoke the classic beauty and sophisticated elegance of Italian design. Its sinks and faucets are manufactured using the highest-gauge steel to ensure long-lasting durability.</p>
                    <button className={'w-[150px] h-[55px] border mt-14'}>
                        Discover More
                    </button>
                </div>
            </div>
            <div className={'mt-10 mr-10 ml-10'}>
                <h1 className={'text-3xl text-center'}>Shop by Collection</h1>
                <div className={'grid grid-cols-4 gap-10 mt-10'}>
                    {
                        Contents.map((content) => (
                            <div key={content.title}>
                                <div className={'col-span-1 h-[500px] flex justify-center items-center relative'} >
                                    <Image src={content.image}
                                           alt={'image'}
                                           fill
                                           sizes={'25vw'}
                                           className={'absolute object-cover'}
                                    />

                                </div>
                                <div className={'flex flex-col text-center justify-center mt-10'}>
                                    <span className={'text-2xl'}>{content.title}</span>
                                    <span className={'mt-2'}>{content.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'mt-10 mr-10 ml-10'}>
                <h1 className={'text-center text-3xl'}>Shop by Category</h1>
                <div className={'grid grid-cols-2 gap-10 mt-10'}>
                    <div className={'col-span-1'} >
                        <div className={'h-[500px] flex justify-center items-center relative'}>
                            <Image src={img}
                                   alt={'image'}
                                   fill
                                   sizes={'25vw'}
                                   className={'object-cover absolute'}
                            />
                        </div>
                        <div className={'flex flex-col text-center justify-center mt-6'}>
                            <h1 className={'text-2xl'}>Kitchen {catalog.title}</h1>
                            <button className={'underline'}>Shop Now</button>
                        </div>
                    </div>
                    <div className={'col-span-1'}>
                        <div className={'h-[500px] flex justify-center items-center relative'} >
                            <Image src={img1}
                                   alt={'image'}
                                   fill
                                   sizes={'25vw'}
                                   className={'object-cover absolute'}
                            />
                        </div>
                        <div className={'flex flex-col text-center justify-center mt-6'}>
                            <h1 className={'text-2xl'}>Bathroom {catalog.title}</h1>
                            <button className={'underline'}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <ShopByCategory title={pathname.split("/")[2]}/>
        </div>
    )
}

export default BrandPages