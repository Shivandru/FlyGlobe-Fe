import BestOfferSlider from "../components/BestOfferSlider";
import { importConfig } from "../config/importConfig";

const BestOffers = () => {
  return (
    <div className="flex flex-col gap-4 h-auto px-[61px]">
      <div className="flex justify-center gap-2 mx-auto w-full">
        <img src={importConfig.lineSvg} alt="lineSvg" />
        <p className="font-[700] text-[18px] leading-[140%] font-sans">
          Best Offers
        </p>
      </div>
      <div className="max-w-[700px] w-full mx-auto mb-12">
        <p className="text-[#000] font-dm-sans text-sm leading-[140%] font-[400] text-center">
          We're excited to offer you an exclusive voucher to help you save on
          your next adventure. Whether you're planning a weekend getaway, a
          family vacation, or a solo expedition.
        </p>
      </div>
      <BestOfferSlider />
    </div>
  );
};

export default BestOffers;
