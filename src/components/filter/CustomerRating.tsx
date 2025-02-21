import {useState} from "react";
import Image from "next/image";
import arrowUp from "../../../public/arrow/arrow-up.png";
import arrowDown from "../../../public/arrow/down-arrow.png";
import {Card} from "@nextui-org/react";
import {FaRegStar, FaStar} from "react-icons/fa";

const ratings = [
    { value: 5, label: "5 Stars" },
    { value: 4, label: "4 Stars & Up" },
    { value: 3, label: "3 Stars & Up" },
    { value: "all", label: "All Reviewed Products" },
];

const CustomerRating = ({onFilter}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
        onFilter(rating);
    };

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <div className={'flex mr-4 ml-4 justify-between h-[50px] items-center'}>
                    <h1 className={'text-[17px]'}>Customer Rating</h1>
                    {
                        isOpen ? <Image src={arrowUp} alt={'arrow-up'} width={15} height={15} className={'object-cover'}/>
                            : <Image src={arrowDown} alt={'arrow-down'} width={15} height={15} className={'object-cover'}/>
                    }
                </div>
            </div>
            {
                isOpen && (
                    <div className={'ml-12 mb-4'}>
                        <Card>
                            <div className="space-y-2 mt-3">
                                {ratings.map((rating, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <input
                                            type={'checkbox'}
                                            id={`rating-${index}`}
                                            checked={selectedRating === rating.value}
                                            onChange={() => handleRatingChange(rating.value)}
                                            className={'mr-2 w-[20px] h-[20px]'}
                                        />
                                        <label htmlFor={`rating-${index}`} className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i}>
                                                    {i < rating.value ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-gray-400" />}
                                                </span>
                                            ))}
                                            {rating.value !== 5 && rating.value !== "all" && <span>& Up</span>}
                                        </label>
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

export default CustomerRating