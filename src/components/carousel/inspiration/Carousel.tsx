"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import './inspiration.css'

const KeepShoppingForWallArts = [
    {
        title: "Lemon Study 1 Print",
        image: "https://assets.wfcdn.com/im/57313464/resize-h400-w400%5Ecompr-r85/2329/232985125/Lemon+Study+1+Print.jpg",
        description: "Yoffi"
    },
    {
        title: "Pear 4 Print",
        image: "https://assets.wfcdn.com/im/76733885/resize-h400-w400%5Ecompr-r85/2329/232984350/Pear+4+Print.jpg",
        description: "Yoffi"
    },
    {
        title: "Pear 1 Print by Leigh Viner",
        image: "https://assets.wfcdn.com/im/39636329/resize-h400-w400%5Ecompr-r85/2329/232984488/Pear+1+Print+by+Leigh+Viner.jpg",
        description: "Yoffi"
    },
    {
        title: "\"Cafe\" Framed Print Wall Art",
        image: "https://assets.wfcdn.com/im/48692502/resize-h400-w400%5Ecompr-r85/2891/289106533/%22Cafe%22+Framed+Print+Wall+Art.jpg",
        description: "R2H Modern"
    },
    {
        title: "Walking In The Sky Painting by Sara Brown",
        image: "https://assets.wfcdn.com/im/20589169/resize-h400-w400%5Ecompr-r85/4896/48965136/Walking+In+The+Sky+Painting+by+Sara+Brown.jpg",
        description: "Chelsea Art Studio"
    },
    {
        title: "Pear 3 Print",
        image: "https://assets.wfcdn.com/im/49736191/resize-h400-w400%5Ecompr-r85/2329/232984293/Pear+3+Print.jpg",
        description: "Yoffi"
    },
    {
        title: "Lemon Still Life 2 Painting by Nathan Turner",
        image: "https://assets.wfcdn.com/im/04107640/resize-h400-w400%5Ecompr-r85/1389/138932793/Lemon+Still+Life+2+Painting+by+Nathan+Turner.jpg",
        description: "Wendover Art Group"
    },
    {
        title: "Rosa Chinensis Lutea Print",
        image: "https://assets.wfcdn.com/im/51332807/resize-h400-w400%5Ecompr-r85/2329/232985003/Rosa+Chinensis+Lutea+Print.jpg",
        description: "Yoffi"
    },
    {
        title: "Bloom 0709 Print",
        image: "https://assets.wfcdn.com/im/62494597/resize-h400-w400%5Ecompr-r85/2329/232984495/Bloom+0709+Print.jpg",
        description: "Yoffi"
    },
    {
        title: "Orange Hibiscus On Snow Print",
        image: "https://assets.wfcdn.com/im/05895101/resize-h400-w400%5Ecompr-r85/2767/276702398/Orange+Hibiscus+On+Snow+Print.jpg",
        description: "India & Purry"
    },
]

const Carousel = () => {
    return (
        <div>
            <h1 className={''}>Keep Shopping For Wall Arts</h1>
            <Swiper modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    breakpoints={{
                        640: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 6},
                    }}
                    className={'mt-10'}
            >
                {
                    KeepShoppingForWallArts.map((item, index) => (
                        <SwiperSlide key={index} className="text-center">
                            <div className={''}>
                                <Image src={item.image}
                                       alt={item.title}
                                       width={300}
                                       height={300}
                                       className={'object-cover border'}/>
                                <h3 className={'text-center mt-4'}>{item.title}</h3>
                                <h3 className={'text-center'}>{item.description}</h3>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel