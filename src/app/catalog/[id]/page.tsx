"use client"

import React from "react";
import ProductsByCatalog from "@/components/products/ProductsByCatalog";
import {useParams} from "next/navigation";

const CatalogPage = ({params}: {params: {id: string}}) => {
    const {id} = useParams<{id: string}>();

    return (
        <div className={'mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'}>
            <div>
                <h1>Title Article</h1>
                <span>Content Article</span>
            </div>
            <div>
                <h1 className={'text-3xl font-300'}>Related Products</h1>
                <div className={'mt-8'}>
                    <ProductsByCatalog id={id}/>
                </div>
            </div>
        </div>
    )

}

export default CatalogPage