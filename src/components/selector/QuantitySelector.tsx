"use client"

import React, {useState} from "react";

const QuantitySelector = ({ initialQuantity = 1, onChange}) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onChange(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        onChange(quantity + 1);
    };

    const handleInputChange = (e: React.ChangeEvent) => {
        const value = parseInput(e.target.value, 10);

        if (!isNaN(value) && value >= 1) {
            setQuantity(value)
        }
    }

    return (
        <div className={''}>
            <div className="flex items-center space-x-2">
                <button
                    onClick={handleDecrease}
                    className={'w-8 px-1 py-1 border rounded-md'}
                >
                    -
                </button>
                <input
                    type="text"
                    value={quantity}
                    onChange={handleInputChange}
                    min={1}
                    className="w-20 h-[34px] text-center border rounded-md"
                />
                <button
                    onClick={handleIncrease}
                    className={'w-8 px-1 py-1 border rounded-md'}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default QuantitySelector