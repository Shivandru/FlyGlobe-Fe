
const HeroText = () => {
  return (
    <div className="max-w-[550px] h-full flex flex-col gap-4 items-start justify-center">
      <p className="text-[#fff] font-[900] text-[28px] leading-[140%] tracking-[-2%] font-sans">
        UNLOCK EFFORTLESS TRAVEL WITH UNBEATABLE FLIGHT DEALS!
      </p>
      <div className="max-w-[390px]">
        <p className="text-[#fff]">
          From Seamless Booking to Smooth Takeoff - We Take Care of Every Detail
          So You Can Enjoy The Journey!
        </p>
      </div>
      <button className="w-[141px] h-[39px] px-4 py-3 bg-transparent border border-[#fff] text-[#fff] rounded-[10px] text-xs">
        DISCOVER NOW
      </button>
    </div>
  );
};

export default HeroText;
