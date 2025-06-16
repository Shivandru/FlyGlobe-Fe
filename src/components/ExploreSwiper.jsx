import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { importConfig } from "../config/importConfig";
import ExploreCard from "./ExploreCard";
const EXPLORE = [
  {
    icon: importConfig.nearBy1,
    title: "LOS ANGELES",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy2,
    title: "MIAMI",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy3,
    title: "NEW YORK",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy4,
    title: "LAS VEGAS",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy4,
    title: "LAS VEGAS",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy5,
    title: "CHICAGO",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy6,
    title: "TEXAS",
    des: "2-Hours Away",
  },
  {
    icon: importConfig.nearBy6,
    title: "TEXAS",
    des: "2-Hours Away",
  },
];
const ExploreSwiper = () => {
  return (
    <div className="w-full h-auto">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {EXPLORE.map((el, i) => (
          <SwiperSlide key={i}>
            <ExploreCard image={el.icon} text={el.title} des={el.des} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExploreSwiper;
