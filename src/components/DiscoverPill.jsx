import React from "react";

const DiscoverPill = ({ text, selectedPill, onClick }) => {
  return (
    <button
      className={`${
        selectedPill === text ? "bg-[#081433] text-[#fff]" : "text-[#000]"
      } px-4 py-3 rounded-[8px]  font-[400] leading-[140%] text-[13px] font-dm-sans cursor-pointer`}
      style={{ border: "0.7px solid #000" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DiscoverPill;
