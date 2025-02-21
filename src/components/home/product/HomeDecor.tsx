"use client"

import {CardFooter} from "@nextui-org/card";
import {Card, CardBody} from "@nextui-org/react";
import Image from "next/image"
import Link from "next/link";

const HomeDecor = () => {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    return (
        <div className={'gap-5 grid grid-cols-2 sm:grid-cols-4'}>
            {
                list.map((item, index) => (
                    <div className={'border-solid border-2 border-black/20 w-4/5 h-60'}>
                        <Card shadow={'sm'}
                              key={index}
                              isPressable
                              className={'w-full h-full'}
                        >
                            <Link href={'/product/' + item.title}>
                                <CardBody className={'overflow-visible p-0 h-full'}>
                                    <Image shadow={'sm'}
                                           radius={'lg'}
                                           alt={item.title}
                                           className={'w-[243px] object-cover h-[200px]'}
                                           src={''}
                                    />
                                </CardBody>
                            </Link>
                            <CardFooter className={'text-small w-full flex flex-start h-10 justify-between mb-2'}>
                                <b className={'mr-2 mt-2 ml-5'}>{item.title}</b>
                                <p className={'text-default-500 mt-2 mr-5'}>{item.price}</p>

                            </CardFooter>
                        </Card>
                    </div>
                ))
            }
        </div>

    )
}

export default HomeDecor