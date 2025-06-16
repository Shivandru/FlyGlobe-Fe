import React from "react";
import { importConfig } from "../config/importConfig";

const TravelCard = ({ icon, title, des }) => {
  return (
    <div className="w-[240px] h-[215px] flex flex-col gap-[10px] justify-between items-start p-4 rounded-[16px] bg-[#09132E]">
      <div className="bg-[#282A2D] rounded-[4px] p-3">
        <img src={icon} alt="boltIcon" />
      </div>
      <p className="font-dm-sans font-[600] text-[16px] leading-[140%] text-[#fff]">
        {title}
      </p>
      <p className="text-[#BDC1C6] text-[15px] leading-[140%] font-dm-sans font-[400]">
        {des}
      </p>
    </div>
  );
};

export default TravelCard;
