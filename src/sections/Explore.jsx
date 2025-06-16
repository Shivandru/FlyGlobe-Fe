import ExploreSwiper from "../components/ExploreSwiper";
import VoucherCardSwiper from "../components/VoucherCardSwiper";
import { importConfig } from "../config/importConfig";

const Explore = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center px-[61px]">
      <div className="flex items-center justify-center gap-2 w-full mx-auto mb-12">
        <img src={importConfig.lineSvg} alt="lineSvg" />
        <span className="text-[#000] text-[18px] leading-[140%] font-dm-sans font-[700]">
          EXPLORE NEARBY
        </span>
      </div>
      <div className="flex justify-between items-center gap-12 w-full h-auto mb-12">
        <ExploreSwiper />
      </div>
      <div className="flex justify-between items-center gap-12 w-full h-auto">
        <VoucherCardSwiper />
      </div>
    </div>
  );
};

export default Explore;
