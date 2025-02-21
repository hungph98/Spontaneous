"use client"

import Image from "next/image";
import arrowUp from "../../../public/arrow/arrow-up.png";
import arrowDown from "../../../public/arrow/down-arrow.png";
import {useState} from "react";

const SpecialOffers = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <div className={'flex mr-4 ml-4 justify-between h-[50px] items-center'}>
                    <h1 className={'text-[17px]'}>Special Offers</h1>
                    {
                        isOpen ? <Image src={arrowUp} alt={'arrow-up'} width={15} height={15} className={'object-cover'}/>
                            : <Image src={arrowDown} alt={'arrow-down'} width={15} height={15} className={'object-cover'}/>
                    }
                </div>
            </div>
            {isOpen && (
                <form className={'ml-8 mr-8'}>
                    <div className={'ml-4'}>
                        <div className={'flex mb-4'}>
                            <input
                                type="checkbox"
                                className={'mr-2 w-[20px] h-[20px]'}
                            />
                            <label>Sale</label>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}

export default SpecialOffers