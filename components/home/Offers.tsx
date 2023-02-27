'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {offersAarray} from "../../dummy-data/home";
export default function Offers() {
    return (
        <div className="h-60 py-5 ">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {offersAarray.map((offer) => (
                    <SwiperSlide key={offer.price} className="relative">
                        <img src={offer.image}
                             className="scale-110 rounded-lg"
                             alt=""/>
                        <span className="absolute text-white
                        bg-base-100 py-2 px-4 rounded-lg bottom-1">
                            ${offer.price}
                        </span>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};
