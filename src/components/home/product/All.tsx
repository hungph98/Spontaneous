"use client"

import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";

interface NewArrivals {
    _id: string;
    title: string;
    image: string;
}

const All = () => {
    const [newArrivals, setNewArrivals] = useState<NewArrivals[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/new-arrivals`);
                const data = await res.json();

                if (!res.ok) {
                    return;
                }

                if (!data.data || data.data.length === 0) {
                    return

                }

                setNewArrivals(data.data)
            } catch (err) {
                return
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div className={'w-full h-full'}>
            <div className={'relative w-full h-80'}>
                <Link href={'/'}>
                    <Image
                        src={'https://assets.wfcdn.com/im/04813629/c_crop-h280-w1600%5Ecompr-r85/2788/278862288/picture_desktop_278862288.jpg'}
                        alt={'image'}
                        fill
                        className={'object-cover'}
                    />
                </Link>
            </div>
            <div className={'h-96 mt-10'}>
                <div className={'flex gap-8 w-full h-full items-center'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={'https://assets.wfcdn.com/im/43377734/compr-r85/3180/318014641/default_name.jpg'}
                               alt={'image'}
                               fill
                               className={'object-cover w-full h-full'}
                        />
                    </div>
                    <div className={'w-1/3'}>
                        <h1 className={'text-center'}>TileBar</h1>
                        <p className={'text-center'}>Myriad materials and designer collabs introduce artistry and
                            innovation to floors, walls, and beyond.</p>
                    </div>
                </div>
            </div>
            <div className={'mt-12'}>
                <h1 className={'text-2xl text-center'}>New Arrivals By Category</h1>
                <div className={'grid grid-cols-4 gap-8 mt-8'}>
                    {
                        newArrivals.map((item) => (
                            <div className={'col-span-1'} key={item._id}>
                                <div>
                                    <div className={'h-full'}>
                                        <div className={'relative w-full h-80'}>
                                            <Image src={item.image}
                                                   alt={'image'}
                                                   fill
                                                   className={'w-full h-full object-cover hover:opacity-[1]'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className={'mt-4 underline text-center'}>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'h-96 mt-10'}>
                <div className={'flex gap-8 w-full h-full items-center'}>
                    <div className={'w-1/3'}>
                        <h1 className={'text-center'}>Henry Holland x Harlequin</h1>
                        <p className={'text-center'}>Explore fabric and wallpaper in the spirited style of ceramicist
                            Henry Holland. In earthy tones, graphic motifs are striking yet livable.</p>
                    </div>
                    <div className={'relative w-full h-full'}>
                        <Image src={'https://assets.wfcdn.com/im/13533273/compr-r85/3180/318014651/default_name.jpg'}
                               alt={'image'}
                               fill
                               className={'object-cover w-full h-full'}
                        />
                    </div>
                </div>
            </div>
            <div className={'h-96 mt-10'}>
                <div className={'flex gap-8 w-full h-full items-center'}>

                    <div className={'relative w-full h-full'}>
                        <Image src={'https://assets.wfcdn.com/im/36078657/compr-r85/3180/318014648/default_name.jpg'}
                               alt={'image'}
                               fill
                               className={'object-cover w-full h-full'}
                        />
                    </div>
                    <div className={'w-1/3'}>
                        <h1 className={'text-center'}>Zafferano America</h1>
                        <p className={'text-center'}>Rechargeable and portable, LED lamps by this Italian brand glow the distance – indoors and out, up to 13 hours straight.
                        </p>
                    </div>
                </div>
            </div>
            <div className={'h-96 mt-10'}>
                <div className={'flex gap-8 w-full h-full items-center'}>
                    <div className={'w-1/3'}>
                        <h1 className={'text-center'}>Dale Chihuly x The Rug Company</h1>
                        <p className={'text-center'}>The glass artist’s famous sculptures are reimagined in hand-knotted wool and silk, invoking the transparency of blown glass.
                        </p>
                    </div>
                    <div className={'relative w-full h-full'}>
                        <Image src={'https://assets.wfcdn.com/im/32026821/compr-r85/3180/318014642/default_name.jpg'}
                               alt={'image'}
                               fill
                               className={'object-cover w-full h-full'}
                        />
                    </div>
                </div>
            </div>
            <div className={'relative w-full h-60 mt-10'}>
                <Link href={'/'}>
                    <Image
                        src={'https://assets.wfcdn.com/im/04813629/c_crop-h280-w1600%5Ecompr-r85/2788/278862288/picture_desktop_278862288.jpg'}
                        alt={'image'}
                        fill
                        className={'object-cover'}
                    />
                </Link>
            </div>
        </div>
    )
}

export default All