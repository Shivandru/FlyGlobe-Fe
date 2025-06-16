import { useState } from "react";
import { importConfig } from "../config/importConfig";
import DiscoverPill from "./DiscoverPill";

const LOCATIONS = [
  "All",
  "Asian",
  "European",
  "Middle-East",
  "Beach Paradise",
  "Nature Retreats",
  "Romantic Escapes",
  "Culture Immersion",
  "Africa",
  "American",
];

const DiscoverLeft = () => {
  const [selectedPill, setSelectedPill] = useState("All");

  function handlePill(text) {
    setSelectedPill(text);
  }

  return (
    <div className="w-full h-auto flex flex-col">
      <div className="flex items-center gap-2">
        <img src={importConfig.lineSvg} alt="lineSvg" />
        <span className="text-[#000] text-[18px] leading-[140%] font-dm-sans font-[700]">
          Discover
        </span>
      </div>
      <p className="font-[600] text-base leading-[140%] font-dm-sans">
        More than 100 destinations waiting for you
      </p>
      <div className="max-w-[516px]">
        <p className="text-[#000] font-[400] text-[15px] leading-[140%] font-dm-sans">
          Explore our curated list of the best countries to visit in 2024 and
          discover incredible destinations waiting to be explored
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-12 max-w-[500px]">
        {LOCATIONS.map((el, i) => (
          <DiscoverPill
            key={i}
            text={el}
            selectedPill={selectedPill}
            onClick={() => handlePill(el)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverLeft;
