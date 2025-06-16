import TravelCard from "../components/TravelCard";
import { importConfig } from "../config/importConfig";

const TRAVELLERS_CARD = [
  {
    icon: importConfig.boltIcon,
    title: "Seamless Booking Experience",
    des: "With FlyGlobe, booking your flights is effortless and convenient.",
  },
  {
    icon: importConfig.dollarIcon,
    title: "Best Pricing and Deals",
    des: "FlyGlobe is committed to offering you the best possible value for your travel budget.",
  },
  {
    icon: importConfig.bulbIcon,
    title: "Personalized Travel Recommendations",
    des: "FlyGlobe offers personalized travel recommendations tailored to your preferences.",
  },
];

const Travellers = () => {
  return (
    <div className="h-auto w-full flex justify-between items-center px-[61px]">
      <div className="flex items-center justify-between gap-[24px]">
        {TRAVELLERS_CARD.map((el, i) => (
          <div key={i}>
            <TravelCard icon={el.icon} title={el.title} des={el.des} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-[48px]">
        <div class="flex -space-x-6">
          <img
            class="inline-block size-20 rounded-full ring-2 ring-[#D43636]"
            src={importConfig.customerIcon}
            alt=""
          />
          <img
            class="inline-block size-20 rounded-full ring-2 ring-[#D43636]"
            src={importConfig.customerIcon}
            alt=""
          />
          <img
            class="inline-block size-20 rounded-full ring-2 ring-[#D43636]"
            src={importConfig.customerIcon}
            alt=""
          />
          <img
            class="inline-block size-20 rounded-full ring-2 ring-[#D43636]"
            src={importConfig.customerIcon}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img src={importConfig.lineSvg} alt="lineSvg" />
            <span className="text-[#000] font-[700] text-[18px] leading-[140%] font-dm-sans]">
              WHY FLYGLOBE
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-[600] text-base leading-[140%] font-dm-sans">
              Our happy travellers
            </p>
            <p className="font-[600] text-base leading-[140%] font-dm-sans">
              4.9 (3.5 k Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travellers;
