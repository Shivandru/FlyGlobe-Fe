import React from "react";

const HeroForm = () => {
  return (
    <div className="bg-[#09132E] p-6 rounded-xl text-white w-[530px] space-y-4 font-sans">
      <div className="flex items-center justify-between">
        <div className="bg-[#0F1D3F] px-4 py-2 rounded-full cursor-pointer flex items-center gap-2">
          Multi City
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/plane-icon.svg" className="w-4 h-4" alt="from" />
          <span>Delhi (DEL)</span>
        </div>
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/plane-icon.svg" className="w-4 h-4" alt="to" />
          <span>London (LHR)</span>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/calendar-icon.svg" className="w-4 h-4" alt="calendar" />
          <span>Mar 20, 2025</span>
        </div>
        <button className="bg-white text-[#09132E] px-4 py-2 rounded-full font-medium w-fit">
          + Add Trip
        </button>
      </div>
      <div className="flex justify-between gap-3">
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/user-icon.svg" className="w-4 h-4" alt="user" />
          <span>1 Adult, 1 Child</span>
        </div>
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/seat-icon.svg" className="w-4 h-4" alt="seat" />
          <span>Economy</span>
        </div>
      </div>
      <div>
        <label className="text-sm mb-1 block">Select Airlines</label>
        <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full w-full">
          <img src="/airplane-icon.svg" className="w-4 h-4" alt="airline" />
          <span>All Airlines</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-white" />
          Direct Flights Only
        </label>
      </div>
      <button className="w-full py-3 bg-white text-[#09132E] rounded-full font-semibold mt-3">
        Search
      </button>
    </div>
  );
};

export default HeroForm;
