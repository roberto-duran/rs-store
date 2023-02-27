'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import styles from './home.module.css'

export default function CarouselPromotions() {
    return (
        <div className={`relative h-80 shadow  ${styles.carouselPromotionsContainer}`}>
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
                className="carouselPromotions"
            >
                {
                    [...Array(10).keys()].map((i) => (
                        <SwiperSlide key={i+1}>
                            <img src={`/images/swiper/${i+1}.jpg`} alt="" />
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
