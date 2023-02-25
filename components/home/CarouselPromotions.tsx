'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
// import required modules

export default function CarouselPromotions() {
    return (
        <div className="h-80 shadow">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                observer={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    [...Array(10).keys()].map((i) => (
                        <SwiperSlide key={i}>
                            <img src={`/images/swiper/${i}.jpg`} alt="" />
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide>
                    <img src="/images/swiper/1.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};
