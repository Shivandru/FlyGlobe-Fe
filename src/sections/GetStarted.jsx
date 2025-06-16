import React from "react";
import { importConfig } from "../config/importConfig";

const GetStarted = () => {
  return (
    <div className="flex flex-col gap-12 px-[61px] w-full h-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 items-start justify-start">
          <p className="font-[400] text-[18px] leading-[36px] font-dm-sans text-[#000]">
            GET STARTED
          </p>

          <p className="font-[700] text-[60px] leading-[60px] tracking-[-6%] font-dm-sans text-[#000]">
            Get in touch with us,
            <br /> We're here to assist you.
          </p>
        </div>
        <div>
          <img src={importConfig.socialMedia} alt="socialMedia" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="border-b border-[#CACACA] w-[400px] flex flex-col gap-4">
          <p className="font-[400] text-[24px] leading-[36px] font-dm-sans text-[#000]">
            Your Name
          </p>
          <input type="text" className="outline-none w-full px-3" />
        </div>
        <div className="border-b border-[#CACACA] w-[400px] flex flex-col gap-4">
          <p className="font-[400] text-[24px] leading-[36px] font-dm-sans text-[#000]">
            Email Address
          </p>
          <input type="email" className="outline-none w-full px-3" />
        </div>
        <div className="border-b border-[#CACACA] w-[400px] flex flex-col gap-4">
          <p className="font-[400] text-[24px] leading-[36px] font-dm-sans text-[#000]">
            Phone Number (optional)
          </p>
          <input type="tel" className="outline-none w-full px-3" />
        </div>
      </div>
      <div className="border-b border-[#CACACA] w-full flex flex-col gap-12">
        <p className="font-[400] text-[24px] leading-[36px] font-dm-sans text-[#000]">
          Message
        </p>
        <input type="text" className="outline-none w-full" />
      </div>
      <div className="w-full flex justify-start">
        <button
          className="font-dm-sans font-[600] text-[11px] leading-[140%] text-[#000] px-[16px] py-[12px] rounded-[10px]"
          style={{
            border: "0.4px solid #000",
          }}
        >
          LEAVE US A MESSAGE
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
