import {useState} from "react";
import Image from "next/image";
import arrowUp from "../../../public/arrow/arrow-up.png";
import arrowDown from "../../../public/arrow/down-arrow.png";
import {Card} from "@nextui-org/react";

const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF", border: true },
    { name: "Red", hex: "#FF6666" },
    { name: "Yellow", hex: "#FFD700" },
    { name: "Blue", hex: "#6699FF" },
    { name: "Purple", hex: "#C7A2E3" },
    { name: "Gray", hex: "#BEBEBE" },
    { name: "Brown", hex: "#C19A6B" },
    { name: "Orange", hex: "#FFB347" },
    { name: "Green", hex: "#90EE90" },
    { name: "Navy", hex: "#556B2F" },
    { name: "Pink", hex: "#FFB6C1" },
];

const ShopByColor = ({onFilter}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColors, setSelectedColors] = useState([]);

    const toggleColor = (color) => {
        const updatedColors = selectedColors.includes(color)
            ? selectedColors.filter((c) => c !== color)
            : [...selectedColors, color];

        setSelectedColors(updatedColors);
        onFilter(updatedColors);
    };

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <div className={'flex mr-4 ml-4 justify-between h-[50px] items-center'}>
                    <h1 className={'text-[17px]'}>Shop By Color</h1>
                    {
                        isOpen ? <Image src={arrowUp} alt={'arrow-up'} width={15} height={15} className={'object-cover'}/>
                            : <Image src={arrowDown} alt={'arrow-down'} width={15} height={15} className={'object-cover'}/>
                    }
                </div>
            </div>
            {
                isOpen && (
                    <div>
                        <Card>
                            <div className={'grid grid-cols-3 gap-2 mt-3'}>
                                {colors.map((color, index) => (
                                    <div key={index} className={'flex flex-col items-center'}>
                                        <button
                                            className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                                                color.border ? "border-gray-300" : "border-none"
                                            }`}
                                            style={{ backgroundColor: color.hex }}
                                            onClick={() => toggleColor(color.name)}
                                        >
                                            {selectedColors.includes(color.name) && (
                                                <span className={'text-white font-bold'}>✔</span>
                                            )}
                                        </button>
                                        <span className={'text-xs mt-1'}>{color.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                )
            }
        </div>
    )
}

export default ShopByColor