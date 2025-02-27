"use client"

import { SubmitHandler, FieldValues, useForm} from "react-hook-form";
import React, {useState} from "react";
import {Input} from "@nextui-org/input";
import {Checkbox} from "@nextui-org/checkbox";
import {Button} from "@nextui-org/button";
import {Card} from "@nextui-org/react";
import Image from "next/image";
import arrowUp from "../../../public/arrow/arrow-up.png";
import arrowDown from "../../../public/arrow/down-arrow.png";


const priceRanges = [
    {
        label: "Under $50",
        min: 0, max: 50
    },
    {
        label: "$50 to $100",
        min: 50, max: 100
    },
    {
        label: "$100 to $200",
        min: 100, max: 200
    },
    {
        label: "$200 to $300",
        min: 200, max: 300
    },
    {
        label: "$300 to $400",
        min: 300, max: 400
    },
    {
        label: "$400 to $500",
        min: 400, max: 500
    },
    {
        label: "$500 & Above",
        min: 500, max: 1000000
    }
]

interface Props {
    onFilter: (price: { max: number; min: number }) => void;
}

interface PriceRange {
    label: string;
    min: number;
    max: number;
}

interface PriceData {
    minPrice: string;
    maxPrice: string;
}


const PricePerItem: React.FC<Props> = ({onFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const [selectedRanges, setSelectedRanges] = useState<PriceRange[]>([]);

    const handleRangeChange = (range: { label: string; max: number; min: number }) => {
        // Assuming `range` is a string like "min-max" and needs to be parsed
        const min = range.min;
        const max = range.max;
        const label = range.label;

        let updatedRanges: PriceRange[];

        updatedRanges = selectedRanges.some(
            (r: PriceRange) => r.min === min && r.max === max
        )
            ? selectedRanges.filter((r: PriceRange) => r.min !== min || r.max !== max)
            : [...selectedRanges, { label, min, max }];

        setSelectedRanges(updatedRanges);

        if (updatedRanges.length) {
            setValue("minPrice", Math.min(...updatedRanges.map(r => r.min)));
            setValue("maxPrice", Math.max(...updatedRanges.map(r => r.max)));
        } else {
            setValue("minPrice", "");
            setValue("maxPrice", "");
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const typeData = data as PriceData;

        onFilter({
            min: typeData.minPrice ? parseInt(typeData.minPrice, 10) : 0,
            max: typeData.maxPrice ? parseInt(typeData.maxPrice, 10) : 0
        })
    }

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <div className={'flex mr-4 ml-4 justify-between h-[50px] items-center'}>
                    <h1 className={'text-[17px]'}>Price Per Item</h1>
                    {
                        isOpen ? <Image src={arrowUp} alt={'arrow-up'} width={15} height={15} className={'object-cover'}/>
                            : <Image src={arrowDown} alt={'arrow-down'} width={15} height={15} className={'object-cover'}/>
                    }
                </div>
            </div>
            {
                isOpen && (
                    <div className={'mb-4'}>
                        <Card className={'ml-8 mr-8'}>
                            <form onSubmit={handleSubmit(onSubmit)} className={'mt-3 space-y-3'}>
                                <div className={'flex gap-2'}>
                                    <input
                                        type={'text'}
                                        placeholder={'Min'}
                                        {...register("minPrice")}
                                        className={'w-1/2 h-[50px] border border-[gray] p-4'}
                                    />
                                    <input
                                        type={'text'}
                                        {...register("maxPrice")}
                                        placeholder={'Max'}
                                        className={'w-1/2 h-[50px] border border-[gray] p-4'}
                                    />
                                </div>

                                {/* Price Range Checkboxes */}
                                <div className={'mt-2 ml-4'}>
                                    {priceRanges.map((range, index) => (
                                        <div key={index} className={'flex items-center'}>
                                            <input
                                                type={'checkbox'}
                                                id={`range-${index}`}
                                                checked={selectedRanges.includes(range)}
                                                onChange={() => handleRangeChange(range)}
                                                className={'mr-2 w-[20px] h-[20px]'}
                                            />
                                            <label htmlFor={`range-${index}`} className="ml-2">
                                                {range.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <Button type={'submit'} className={'w-full mt-3 border'}>
                                    Apply Filter
                                </Button>
                            </form>
                        </Card>
                    </div>
                )
            }

        </div>
    )
}

export default PricePerItem