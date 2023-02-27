import CarouselPromotions from "./CarouselPromotions";
import Offers from "./Offers";

import 'swiper/swiper-bundle.min.css';
export default function Home() {
    return (
        <div className="h-full space-y-6">
            <CarouselPromotions />
            <Offers />
        </div>
    );
};
