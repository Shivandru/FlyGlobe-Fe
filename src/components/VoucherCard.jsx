const VoucherCard = ({image}) => {
  return (
    <div
      className="w-[330px] h-[160px] rounded-[16px] font-dm-sans relative overflow-hidden text-white flex flex-col justify-end p-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#010409]/80 to-[#010409]/40 z-0" />

      <div className="relative z-10 space-y-1">
        <p className="text-sm font-semibold leading-[140%]">SAVE UP TO</p>
        <p className="text-[32px] font-bold leading-[140%]">20%</p>
        <p className="text-[15px] font-medium leading-[110%]">
          On your next flight with this exclusive voucher!
        </p>
      </div>
    </div>
  );
};

export default VoucherCard;
