import { importConfig } from "../config/importConfig";
import { useRef } from "react";

const HeroForm = () => {
  const dateInputRef = useRef(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.();
    }
  };

  return (
    <div className="bg-[#09132E] p-6 rounded-[40px] text-white w-[536px] font-sans flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="bg-[#0F1D3F] px-4 py-3 cursor-pointer flex items-center gap-2 w-[131px] h-[46px] rounded-[100px]">
          Multi City
          <img src={importConfig.downTriangle} alt="downTriangle" />
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="from">From</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img
              src={importConfig.takeOffPlane}
              className="w-6 h-6"
              alt="from"
            />
            <input
              type="text"
              id="from"
              placeholder="Delhi(DEL)"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="to">To</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img src={importConfig.landPlane} className="w-6 h-6" alt="from" />
            <input
              type="text"
              id="to"
              placeholder="London(LHR)"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 items-end">
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="calendar">Departure Date</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img
              src={importConfig.calendar}
              className="w-6 h-6"
              alt="calendar"
              onClick={handleIconClick}
            />
            <input
              type="date"
              id="calendar"
              ref={dateInputRef}
              placeholder="Delhi(DEL)"
              className="w-full outline-none  custom-date-input"
            />
          </div>
        </div>
        <div className="w-[219px] flex flex-col gap-2 cursor-pointer">
          <div className="bg-[#fff] px-4 py-3 rounded-full">
            <button className="text-[#000] font-[600] text-base flex items-center gap-2 cursor-pointer">
              <img src={importConfig.plus} className="w-[10px] h-[11px]" alt="plus" />
              Add Trip
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="passenger">Passenger</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img
              src={importConfig.passenger}
              className="w-6 h-6"
              alt="passenger"
            />
            <input
              type="text"
              id="passenger"
              placeholder="1 Adult, 1 Child"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="seatClass">Seat Class</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img
              src={importConfig.economy}
              className="w-6 h-6"
              alt="seatClass"
            />
            <input
              type="text"
              id="seatClass"
              placeholder="Economy"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6 items-end">
        <div className="w-[219px] h-[78px] flex flex-col gap-2">
          <label htmlFor="selectAirline">Select Airline</label>
          <div className="flex items-center gap-2 bg-[#0F1D3F] px-4 py-3 rounded-full ">
            <img
              src={importConfig.selectAirline}
              className="w-6 h-6"
              alt="selectAirline"
            />
            <input
              type="text"
              id="selectAirline"
              placeholder="All Airlines"
              className="w-full outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between w-[219px]">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 rounded-[5px] bg-transparent border border-[#fff] appearance-none checked:bg-white checked:border-white" />
          Direct Flights Only
        </label>
      </div>
      </div>
      
      <button className="w-full py-3 px-4 h-[46px] bg-white text-[#09132E] rounded-full font-semibold">
        Search
      </button>
    </div>
  );
};

export default HeroForm;
