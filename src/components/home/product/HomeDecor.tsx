"use client"

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import ProductBestSeller from "@/components/products/ProductBestSeller";

interface Categories {
    _id: string;
    title: string;
    image: string;
    description: string;
}

const HomeDecor = () => {
    const [categories, setCategories] = useState<Categories[]>([])
    const [categoryTrending, setCategoryTrending] = useState<Categories[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/decor/categories`);
                const data = await res.json();

                if (!res.ok) {
                    return;
                }

                if (!data.data || data.data.length === 0) {
                    return
                }

                const featuredCategories = data.data.filter((category: { trending: boolean; }) => !category.trending);
                setCategories(featuredCategories)

                const categoryTrending = data.data.filter((category: {
                    trending: boolean;
                }) => category.trending).slice(0, limit);
                setCategoryTrending(categoryTrending)
            } catch (error) {
                return
            } finally {
                setIsLoading(false)
            }
        }
        fetchData().then(() => {
            return
        })
    }, []);

    if (isLoading) {
        return <p className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>Loading...</p>
    }

    return (
        <div className={'gap-10'}>
            <div>
                <h1 className={'text-2xl'}>Featured Categories</h1>
                <div className={'grid grid-cols-6 gap-8 w-full mt-4'}>
                    {
                        categories.map((category) => (
                            <div key={category._id} className={'col-span-1 h-[250px]'}>
                                <Link href={'/src/app/catalog/' + category._id}
                                      className={'w-full h-full flex flex-col justify-center items-center'}>
                                    <div className={'relative w-full h-[250px]'}>
                                        <Image src={category.image}
                                               alt={'category-image'}
                                               fill
                                               className={'object-cover rounded-md'}
                                        />
                                    </div>
                                    <p className={'mt-4 underline'}>{category.title}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'mt-10'}>
                <h1 className={'text-2xl'}>Trending Categories</h1>
                <div className={'grid grid-cols-6 gap-8 w-full mt-4'}>
                    {
                        categoryTrending.map((category) => (
                            <div key={category._id} className={'col-span-1 h-[250px]'}>
                                <Link href={'/src/app/catalog/' + category._id}
                                      className={'w-full h-full flex flex-col justify-center items-center'}>
                                    <div className={'relative w-full h-[250px]'}>
                                        <Image src={category.image}
                                               alt={'category-image'}
                                               fill
                                               className={'object-cover rounded-md'}
                                        />
                                    </div>
                                    <p className={'mt-4 underline'}>{category.title}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={'mt-10'}>
                <ProductBestSeller/>
            </div>
            <div className={'mt-10'}>
                <div className={'flex'}>
                    <div className={'w-1/4 flex flex-col gap-4'}>
                        <h1 className={'text-2xl'}>Related Searches</h1>
                        <Link href={'/'} className={'hover:underline'}>pollack fabrics fabric by the yard</Link>
                        <Link href={'/'} className={'hover:underline'}>soicher marin wall art</Link>
                        <Link href={'/'} className={'hover:underline'}>soicher marin wall art</Link>
                    </div>
                    <div className={'w-3/4'}>
                        <h1 className={'text-2xl'}>Decor</h1>
                        <p className={'mt-4'}>
                            Luxury decor adds the perfect finishing touch to your space. Our limitless selection offers
                            some of the design world’s most unique pieces with high-end decor to fit any style. Whether
                            you are searching for an elegant decorative pillow, one-of-a-kind wall art, or a grand floor
                            mirror, you’ll find all your luxury decor options in one place.
                        </p>
                        <p className={'mt-4'}>
                            Wall Art: The right wall art can pull your entire room together. Find the piece that speaks
                            to you (and the piece your guests won’t be able to stop talking about) in our vast
                            selection. A natural landscape oil painting can offer a touch of serenity, while a graphic
                            abstract print adds a modern sensibility to your space. Whichever style you choose, your
                            wall art will be a focal point in your room, so consider the other furnishings you will pair
                            it with.
                        </p>
                        <p className={'mt-4'}>
                            Decorative Pillows: Decorative pillows don’t just add comfort. They tie your room’s textures
                            and colors together expertly, creating a designer feel. Our pillows come in a variety of
                            luxurious materials and unique styles, so you can find the perfect one to pair with your
                            chairs, beds, and chaises. Filter by color to find a designer pillow that complements your
                            furnishings or adds a pop of personality, or shop by style to find one that ties in
                            perfectly with your modern, traditional, or glam aesthetic. With a range of fashion-forward
                            patterns, timeless shapes, and high-quality materials, you can really get creative, mixing
                            and matching to add an extra element of luxury to your space.
                        </p>
                        <p className={'mt-4'}>
                            Mirrors: Both functional and stylish, luxury decorative mirrors enhance your walls. We carry
                            a wide selection of high-end pieces so you can find the one that works for you. Try an
                            oversized floor mirror to fill an empty wall and open up your bedroom space, or opt for a
                            wall mirror to complete your entryway. Our brand partners offer many points of view,
                            specializing in styles from industrial to contemporary to bohemian. Shop our mirror
                            collection by shape to find the piece that fits your one-of-a-kind needs.
                        </p>
                        <p>
                            Our luxury decor is curated by experts to ensure you find only the highest-quality mirrors,
                            pillows, art pieces, throw blankets, wallpaper, and more. Discover that unique piece you
                            need to complete your beautiful space.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeDecor