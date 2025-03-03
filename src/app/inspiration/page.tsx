"use client"

import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel/inspiration/Carousel";
import {useEffect, useState} from "react";

const Slides = [
    "https://assets.wfcdn.com/im/29920507/resize-h846-w2000%5Ecompr-r85/3306/330651859/destination%3A_outdoors._all_you_need_to_create_your_ultimate_alfresco_escape._330651859.jpg",
    "https://assets.wfcdn.com/im/25611229/resize-h846-w2000%5Ecompr-r85/3286/328697674/maison_objet_market_report_328697674.jpg"
]

const CitrusSeasons = [
    {
        title: 'Citrus Print',
        description: 'Yoffi',
        image: 'https://assets.wfcdn.com/im/41635136/scale-h445-w445%5Ecompr-r85/3293/329312799/default_name.jpg'
    },
    {
        title: 'Lemons Head Bust',
        description: 'VIETRI',
        image: 'https://assets.wfcdn.com/im/36391455/scale-h445-w445%5Ecompr-r85/3293/329312800/default_name.jpg'
    },
    {
        title: 'Citrus Garden Fabric',
        description: 'Schumacher ',
        image: 'https://assets.wfcdn.com/im/25040542/scale-h445-w445%5Ecompr-r85/3293/329312801/default_name.jpg'
    },
    {
        title: 'Luxe Jar Candle',
        description: 'Voluspa',
        image: 'https://assets.wfcdn.com/im/13689629/scale-h445-w445%5Ecompr-r85/3293/329312802/default_name.jpg'
    }
];

const ShopByStyles = [
    {
        title: "Modem",
        image: "https://assets.wfcdn.com/im/59680653/scale-h636-w445%5Ecompr-r85/3204/320486591/default_name.jpg"
    },
    {
        title: "Electic",
        image: "https://assets.wfcdn.com/im/82538921/scale-h636-w445%5Ecompr-r85/3204/320486584/default_name.jpg"
    },
    {
        title: "Traditional",
        image: "https://assets.wfcdn.com/im/51670260/scale-h636-w445%5Ecompr-r85/3204/320486592/default_name.jpg"
    },
    {
        title: "Glam",
        image: "https://assets.wfcdn.com/im/37135269/scale-h636-w445%5Ecompr-r85/3204/320486588/default_name.jpg"
    },
];

const InspirationOfTheMonths = [
    {
        image: "https://assets.wfcdn.com/im/54810558/scale-h890-w890%5Ecompr-r85/3286/328697655/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/58988496/scale-h890-w890%5Ecompr-r85/2640/264014693/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/39820293/scale-h890-w890%5Ecompr-r85/3173/317374922/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/34884899/scale-h890-w890%5Ecompr-r85/3263/326352762/default_name.jpg"
    }
]

const ListBrandsForOutdoorEntertaining = [
    {
        image: "https://assets.wfcdn.com/im/37637366/scale-h890-w890%5Ecompr-r85/3263/326356132/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/73869989/scale-h890-w890%5Ecompr-r85/3263/326356126/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/96571815/scale-h890-w890%5Ecompr-r85/3263/326356124/default_name.jpg"
    },
    {
        image: "https://assets.wfcdn.com/im/48831837/scale-h890-w890%5Ecompr-r85/3263/326356128/default_name.jpg"
    }
]

const UnlimitedWaysToExpressYourStyles = [
    {
        title: "Free Design Services",
        description: "Bring your vision to life with one-on-one guidance from our design experts.",
        link: "/design-services",
        image: "https://assets.wfcdn.com/im/38456187/scale-h800-w640%5Ecompr-r85/2582/258244229/default_name.jpg"
    },
    {
        title: "Gift Cards",
        description: "The ultimate gift for design lovers (and guaranteed to be just their style).",
        link: "/",
        image: "https://assets.wfcdn.com/im/72352484/scale-h800-w640%5Ecompr-r85/2582/258244231/default_name.jpg"
    },
    {
        title: "Browse by Brand",
        description: "An unmatched selection of the best home brands – for every style and space.",
        link: "/",
        image: "https://assets.wfcdn.com/im/61158013/scale-h800-w640%5Ecompr-r85/2582/258244227/default_name.jpg"
    },
    {
        title: "Store Locations",
        description: "Something extraordinary is coming - our first store locations, opening soon.",
        link: "/",
        image: "https://assets.wfcdn.com/im/79871159/scale-h800-w640%5Ecompr-r85/3268/326841161/default_name.jpg"
    }
]

const Inspiration = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev === Slides.length - 1) ? 0 : prev + 1)
        }, 3000)

        return clearInterval(interval)
    }, []);

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev === Slides.length - 1) ? 0 : prev + 1)
    }

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev === 0) ? Slides.length - 1 : prev - 1)
    }

    return (
        <div>
            <div className={'relative w-full mx-auto overflow-hidden'}>
                <div className={'flex transition-transform duration-500'}
                     style={{transform: `translateX(-${currentSlideIndex * 100}%)`}}>
                    {Slides.map((img, index) => (
                        <img key={index} src={img} alt={`Slide ${index + 1}`} className={'w-full'}/>
                    ))}
                </div>
                <button onClick={prevSlide}
                        className={'absolute top-1/2 left-2 transform -translate-y-1/2 bg-white h-14 w-14 p-2 border border-gray-400'}>
                    ❮
                </button>
                <button onClick={nextSlide}
                        className={'absolute top-1/2 right-2 transform -translate-y-1/2 bg-white h-14 w-14 p-2 border border-gray-400'}>
                    ❯
                </button>
                <div className={'absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2'}>
                    {Slides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlideIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentSlideIndex ? "bg-white" : "bg-gray-400"}`}/>
                    ))}
                </div>
            </div>
            <div>
                <div className={'mt-10 text-center'}>
                    <h1 className={'text-xl'}>Extraordinary Finds: Citrus Season</h1>
                    <p>Winter's better with a twist.</p>
                </div>
                <div className={'col-span-1'}>
                    <div className={'mt-10 grid grid-cols-4 gap-8 ml-[10%] mr-[10%]'}>
                        {
                            CitrusSeasons.map((item) => (
                                <div className={'col-span-1'} key={item.title}>
                                    <div className={'h-[400px]'}>
                                        <div className={'relative w-full h-full'}>
                                            <Image src={item.image}
                                                   alt={'image'}
                                                   fill
                                                   className={'w-full h-full object-cover'}
                                            />
                                        </div>
                                    </div>
                                    <p className={'mt-4  text-center'}>{item.title}</p>
                                    <p className={'mt-2 text-center'}>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={'w-full h-full mt-16'}>
                <div className={'relative w-full h-[700px]'}>
                    <Image
                        src={'https://assets.wfcdn.com/im/47946648/resize-h677-w2000%5Ecompr-r85/3268/326875569/harbour_326875569.jpg'}
                        alt={'image'}
                        fill
                        className={'object-cover w-full h-full'}
                    />
                </div>
            </div>
            <div className={'mt-20'}>
                <h1 className={'text-center text-xl'}>Shop by Style</h1>
                <div className={'mt-6 grid grid-cols-4 gap-2 ml-[10%] mr-[10%]'}>
                    {
                        ShopByStyles.map((item) => (
                            <div className={'col-span-1'} key={item.title}>
                                <div className={'h-[400px]'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={item.image}
                                               alt={'image'}
                                               fill
                                               className={'w-full h-full object-cover'}
                                        />
                                    </div>
                                    <p className={'mt-4  text-center'}>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'w-full h-full mt-20'}>
                <div className={'relative w-full h-80'}>
                    <Link href={'/'}>
                        <Image
                            src={'https://assets.wfcdn.com/im/04813629/c_crop-h280-w1600%5Ecompr-r85/2788/278862288/picture_desktop_278862288.jpg'}
                            alt={'image'}
                            fill
                            className={'object-cover w-full h-full'}
                        />
                    </Link>
                </div>
            </div>
            <div className={'mt-10 ml-[10%] mr-[10%]'}>
                <Carousel/>
            </div>
            <div className={'w-full h-full mt-20'}>
                <div className={'relative w-full h-80'}>
                    <Link href={'/'}>
                        <Image
                            src={'https://assets.wfcdn.com/im/43936815/resize-h280-w1600%5Ecompr-r85/3121/312146639/shop_best_sellers_312146639.jpg'}
                            alt={'image'}
                            fill
                            className={'object-cover w-full h-full'}
                        />
                    </Link>
                </div>
            </div>
            <div className={'mt-20 ml-[10%] mr-[10%]'}>
                <h1 className={'text-center text-xl'}>Inspiration of the Month</h1>
                <div className={'grid grid-cols-2 gap-2 mt-10'}>
                    {
                        InspirationOfTheMonths.map((item) => (
                            <div className={'col-span-1'} key={item.image}>
                                <div className={'h-[800px]'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={item.image}
                                               alt={'image'}
                                               fill
                                               className={'w-full h-full object-cover'}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'w-full h-full mt-10'}>
                <div className={'relative w-full h-96'}>
                    <Link href={'/'}>
                        <Image
                            src={'https://assets.wfcdn.com/im/66826414/resize-h677-w2000%5Ecompr-r85/3263/326322968/hooker%3A_modern_mood_collection_326322968.jpg'}
                            alt={'image'}
                            fill
                            className={'object-cover w-full h-full'}
                        />
                    </Link>
                </div>
            </div>
            <div className={'mt-20 ml-[10%] mr-[10%]'}>
                <h1 className={'text-center text-xl'}>A-List Brands for Outdoor Entertaining</h1>
                <div className={'grid grid-cols-2 gap-2 mt-10'}>
                    {
                        ListBrandsForOutdoorEntertaining.map((item) => (
                            <div className={'col-span-1'} key={item.image}>
                                <div className={'h-[800px]'}>
                                    <div className={'relative w-full h-full'}>
                                        <Image src={item.image}
                                               alt={'image'}
                                               fill
                                               className={'w-full h-full object-cover'}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'w-full h-full mt-10'}>
                <div className={'relative w-full h-96'}>
                    <Link href={'/'}>
                        <Image
                            src={'https://assets.wfcdn.com/im/56982074/resize-h308-w2000%5Ecompr-r85/2898/289898169/shop_new_to_sale_289898169.jpg'}
                            alt={'image'}
                            fill
                            className={'object-cover w-full h-full'}
                        />
                    </Link>
                </div>
            </div>
            <div className={'mt-20 ml-[10%] mr-[10%]'}>
                <h1 className={'text-center text-xl'}>Unlimited Ways to Express Your Style</h1>
                <div className={'grid grid-cols-4 gap-4 mt-10'}>
                    {
                        UnlimitedWaysToExpressYourStyles.map((item) => (
                            <div className={'col-span-1'} key={item.image}>
                                <Link href={item.link}>
                                    <div className={'h-[400px]'}>
                                        <div className={'relative w-full h-full'}>
                                            <Image src={item.image}
                                                   alt={'image'}
                                                   fill
                                                   className={'w-full h-full object-cover'}
                                            />
                                        </div>
                                    </div>
                                    <p className={'mt-4  text-center'}>{item.title}</p>
                                    <p className={'mt-2 text-center'}>{item.description}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'mt-10 bg-[#363438]'}>
                <div className={'flex justify-between h-52 ml-[20%] mr-[20%]'}>
                    <div className={'w-[30%] text-white text-3xl mt-10'}>
                        <p>Life’s too short for ordinary.</p>
                        <p>Unlock extraordinary.</p>
                    </div>
                    <div className={'w-[50%] text-white mt-10'}>
                        <p style={{'fontFamily': 'sans-serif'}}>We’re the world’s leading destination for
                            designer-trusted home brands. Our experts vet each
                            product for meticulous craftsmanship and original design, so you can discover a wide
                            selection of unique pieces – and create a space that reflects you. With free shipping on
                            most items, concierge service, and complimentary design advice, we’re here to create a
                            seamless experience, from inspiration to delivery.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inspiration