import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { importConfig } from "../config/importConfig";

const VCARD = [
  { icon: importConfig.voucherCard1 },
  { icon: importConfig.voucherCard2 },
  { icon: importConfig.voucherCard1 },
  { icon: importConfig.voucherCard2 },
  { icon: importConfig.voucherCard1 },
  { icon: importConfig.voucherCard2 },
];
const VoucherCardSwiper = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {VCARD.map((el, i) => (
          <SwiperSlide key={i}>
            <img src={el.icon} alt="icon" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VoucherCardSwiper;
