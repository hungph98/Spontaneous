"use client"

import Image from "next/image";
import style from './carosel.module.scss';
import image from '../../../../public/carousel/image.png';
import imageOne from '../../../../public/carousel/image1.png';
import imageTwo from '../../../../public/carousel/image2.png';
import previous from '../../../../public/carousel/back.png';
import next from '../../../../public/carousel/next.png';
import {useContext, useState} from "react";
import {motion} from "framer-motion";
import {ThemeContext} from "@/components/context/ThemeContext";

const CarouselHomePage = () => {
    const {mode} = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("next");

    const handleNext = () => {
        setTransitionDirection("next");
        setActiveIndex((prevIndex) =>
            prevIndex === 2 ? prevIndex : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setTransitionDirection("previous");
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };

    const texts = [
        {
            title: "Immersive gaming experience",
            description: "adipisicing elit. Iure doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?"
        },
        {
            title: "On demand support when you need it",
            description: "doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?"
        },
        {
            title: "Accessible an inclusitive to all",
            description: "Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?"
        },
    ];

    const textVariants = {
        hidden: {
            opacity: 0,
            x: transitionDirection === "next" ? 100 : -100,
            transition: {duration: 0.5, ease: "easeInOut"},
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.5, ease: "easeInOut"},
        },
    };

    const textContainerVariant = {
        hidden: {},
        visible: {
            transition: {staggerChildren: 0.1},
        },
    };


    return (
        <div style={mode === "dark" ? { "backgroundColor" : "white", 'color': 'black'} : { "backgroundColor": "rgb(229 231 235 / var(--tw-bg-opacity, 1))"}}>
            <div className={style.container}>
                <motion.div className={style.content}
                            key={activeIndex}
                            variants={textContainerVariant} initial='hidden' animate='visible'>
                    <div className={style.title}>
                        <motion.h1 variants={textVariants}>{texts[activeIndex].title}</motion.h1>
                    </div>
                    <div className={style.desc}>
                        <motion.p variants={textVariants}>{texts[activeIndex].description}</motion.p>
                    </div>
                    <div className={style.buttonContent}>
                        <button>Learn more</button>
                    </div>
                </motion.div>
                <div className={style.slide}>
                    <motion.div className={style.firstContainer}
                                animate={{
                                    opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                                    x: activeIndex === 0 ? "0px" : activeIndex === 1 ? "96px" : "96px",
                                    scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0,
                                    ease: "easeInOut"
                                }}
                    >
                        <Image className={style.first} src={image} alt={'image'}/>
                    </motion.div>
                    <motion.div className={style.secondContainer}
                                animate={{
                                    opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
                                    x: activeIndex === 0 ? "-96px" : activeIndex === 1 ? "0px" : "96px",
                                    scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0,
                                    ease: "easeInOut"
                                }}>
                        <Image className={style.second} src={imageOne} alt={'image-one'}/>
                    </motion.div>
                    <motion.div className={style.thirdContainer}
                                animate={{
                                    opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
                                    x: activeIndex === 0 ? "-192px" : activeIndex === 1 ? "-96px" : "0px",
                                    scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0,
                                    ease: "easeInOut"
                                }}
                    >
                        <Image className={style.third} src={imageTwo} alt={'image-two'}/>
                    </motion.div>
                    <div className={style.controls}>
                        <button
                            className={
                                activeIndex === 0 ? `${style.disabled}` : `${style.previous}`
                            }
                            onClick={handlePrevious}>
                            <Image src={previous} alt={'previous'}/>
                        </button>
                        <button
                            className={
                                activeIndex === 2 ? `${style.disabled}` : `${style.next}`
                            }
                            onClick={handleNext}>
                            <Image src={next} alt={'next'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselHomePage