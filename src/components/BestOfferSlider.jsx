import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VoucherCard from "./VoucherCard";
import { importConfig } from "../config/importConfig";
const BestOfferSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <VoucherCard image={importConfig.voucher1} />
        </SwiperSlide>
        <SwiperSlide>
          <VoucherCard image={importConfig.voucher2} />
        </SwiperSlide>
        <SwiperSlide>
          <VoucherCard image={importConfig.voucher1} />
        </SwiperSlide>
        <SwiperSlide>
          <VoucherCard image={importConfig.voucher2} />
        </SwiperSlide>
        <SwiperSlide>
          <VoucherCard image={importConfig.voucher1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestOfferSlider;
