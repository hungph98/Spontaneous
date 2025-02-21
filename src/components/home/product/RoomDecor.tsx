"use client"

import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

const RoomDecor = () => {
    return (
        <div>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://nextui.org/images/card-example-3.jpeg"
                    />
                </Card>
            </div>
        </div>
    )
}

export default RoomDecor