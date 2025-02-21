"use client"

import {useState} from "react";
import Image from "next/image";
import productImage from "../../../../public/product.png"

const ProductImage = ({items}: {items: any}) => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className={'relative flex justify-center p-4'}>
                <Image
                    src={items?.[index] || productImage}
                    alt={'large-image'}
                    width={'300'}
                    height={'400'}
                    className={'object-cover hover:scale-125 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'}
                    style={{'transition': 'all .7s ease-in-out'}}
                />
            </div>
            <div className={'flex justify-between gap-4 mt-8'}>
                {
                    items.map((item: any, i: number) => (
                        <div
                            className={'relative gap-4 mt-8 cursor-pointer'}
                            onClick={() => setIndex(i)}
                            key={item}
                        >
                            <Image
                                src={item}
                                alt={'small-image'}
                                width={100}
                                height={100}
                                className={'object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-125'}
                                style={{'transition': 'all .7s ease-in-out'}}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductImage