"use client"

import Image from "next/image";
import arrowUp from "../../../public/arrow/arrow-up.png";
import arrowDown from "../../../public/arrow/down-arrow.png";
import {useState} from "react";

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [data, setData] = useState([]);

    const categories = [
        'Bathroom Sinks',
        'Cutting Boards',
        'Kitchen Sinks',
        'Mixing Bowls',
        'Serving Dishes & Platters',
        'Strainers, Colanders & Salad Spinners',
        'Tubs And Whirlpools',
    ];

    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filtered = items.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory ? item.category === selectedCategory : true;

            return matchesSearch && matchesCategory;
        });
        setFilteredResults(filtered);
    };
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <div className={'flex mr-4 ml-4 justify-between h-[50px] items-center'}>
                    <h1 className={'text-[17px]'}>Category</h1>
                    {
                        isOpen ? <Image src={arrowUp} alt={'arrow-up'} width={15} height={15} className={'object-cover'}/>
                            : <Image src={arrowDown} alt={'arrow-down'} width={15} height={15} className={'object-cover'}/>
                    }
                </div>
            </div>
            {isOpen && (
                <form onSubmit={handleSubmit} className={'ml-8 mr-8 mt-4'}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={'w-full h-[50px] border border-[gray] p-4'}
                    />
                    <div className={'ml-4'}>
                        {categories.map((category) => (
                            <div key={category} className={'flex mt-4 mb-4'}>
                                <input
                                    type="checkbox"
                                    id={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCheckboxChange(category)}
                                    className={'mr-2 w-[20px] h-[20px]'}
                                />
                                <label htmlFor={category}>{category}</label>
                            </div>
                        ))}
                    </div>
                </form>
            )}
        </div>
    )
}

export default Categories