import React from "react";

const ExploreCard = ({ image, text, des }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-between">
      <div className="w-[180px] h-[180px] rounded-full">
        <img src={image} alt="image" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <p className="text-center text-[#000] text-[18px] leading-[120%] font-[800]">
          {text}
        </p>
        <p className="text-center text-[#5A5B5C] text-[13px] leading-[140%] font-[400] font-dm-sans">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
