import React from "react";
import Reviews from "@/components/review/Reviews";
import Link from "next/link";

const AboutProduct = ({product}) => {

    return (
        <div>
            <div className={'mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 border bg-gray-100'}>
                {
                    !product ? <div>Loading...</div>
                        :
                        <div>
                            <h1 className={'text-center text-2xl mt-10'}>About {product.title}</h1>
                            <p className={'text-center mt-6'}>{product.title}'s team is obsessed with beautiful products that accentuate any home, inspired design that is attentive to every detail while enhancing usability, and unmatched quality that lasts a lifetime.</p>
                            <Link href={`/brands/${product.title}`} className={'flex justify-center mt-10 mb-10'}>
                                <button className={'w-[200px] h-[50px] border bg-white'}>Explore this Brand</button>
                            </Link>
                            <video controls className={'w-full h-full mb-20'}>
                                <source src={'https://assets.wfcdn.com/dm/video/e154864e-7abe-7fa4-3768-921191b20cdf/149275.mp4'} type={'video/mp4'}/>
                            </video>
                        </div>
                }
            </div>
            <div className={'h-[1px]'} style={{'background': 'gray'}}/>
            <Reviews product={product}/>
        </div>
    )
}

export default AboutProduct