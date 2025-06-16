import React from "react";
import BrandLogo from "../components/BrandLogo";
import { importConfig } from "../config/importConfig";

const Footer = () => {
  return (
    <div className="bg-[#09132E] w-full h-[383px] p-[61px] flex flex-col gap-4">
      <div className="flex justify-between items-center gap-[50px] h-full">
        <div className="">
          <BrandLogo />
          <p className="text-[#fff] max-w-sm font-[400] text-[16px] leading-[140%] font-dm-sans">
            FlyGlobe is more than just a flight booking app; it's your one-stop
            shop for seamless travel experiences.
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="space-y-2">
            <p className="text-[#fff] font-[600] text-[18px] leading-[140%] font-dm-sans">
              About Us
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Promo
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Help
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Order
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Contact
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              FAQ
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#fff] font-[600] text-[18px] leading-[140%] font-dm-sans">
              Resources
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Documentation
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Carrier
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Work With Us
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Blog & News
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Affiliate
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#fff] font-[600] text-[18px] leading-[140%] font-dm-sans">
              Legal
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Terms and Condition
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Privacy Policy
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Cookies Policy
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Developers
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#fff] font-[600] text-[18px] leading-[140%] font-dm-sans">
              Contact Us
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              flyglobe@gmail.com
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              +12 345 678 09
            </p>
            <p className="font-[400] text-[16px] leading-[140%] font-dm-sans text-[#fff]">
              Singapore, Indonesia
            </p>
            <p className="text-[#fff] font-[600] text-[18px] leading-[140%] font-dm-sans">
              Follow Us On Social
            </p>
            <div className="grid grid-cols-3 gap-4">
              <img src={importConfig.fbIcon} alt="fbIcon" />
              <img src={importConfig.twitterIcon} alt="twitterIcon" />
              <img src={importConfig.linkedInIcon} alt="linkedInIcon" />
              <img src={importConfig.youtubeIcon} alt="youtubeIcon" />
              <img src={importConfig.instaIcon} alt="instaIcon" />
              <img src={importConfig.tiktokIcon} alt="tiktokIcon" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#fff] w-full flex items-center justify-center py-6">
        <span className="text-center font-[400] text-[18px] leading-[100%] font-dm-sans text-[#fff]">
          © 2025 FlyBritain All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
