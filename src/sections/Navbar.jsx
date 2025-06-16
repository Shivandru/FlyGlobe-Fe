import { useState } from "react";
import BrandLogo from "../components/BrandLogo";
import { importConfig } from "../config/importConfig";
import NavMenu from "../components/NavMenu";

const NAV_ITEMS = [
  { label: "Home" },
  { label: "First" },
  { label: "Business" },
  { label: "About Us" },
  { label: "Contact Us" },
  {
    label: "UK | ENG",
    icon1: importConfig.flagIcon,
    icon2: importConfig.downArrow,
    dropdown: ["UK | ENG", "US | ENG", "IN | ENG"],
  },
  { label: "Login" },
  { label: "Sign Up" },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("UK | ENG");
  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }
  return (
    <div className="flex justify-between items-center max-w-[1190px] min-w-[1190px] mx-auto h-[56px] relative">
      <div>
        <BrandLogo />
      </div>
      <div className="flex items-center min-w-[638px] gap-8">
        {NAV_ITEMS.map((el, i) =>
          el.dropdown ? (
            <div
            key={i}
              className="flex justify-around items-center cursor-pointer gap-3"
              onClick={toggleMenu}
            >
              <img src={el.icon1} />
              <span className="font-[500] text-base leading-[140%] font-sans cursor-pointer text-[#fff]">
                {selectedLang}
              </span>
              <img src={el.icon2} />
            </div>
          ) : (
            <div
              className="font-[500] text-base leading-[140%] font-sans cursor-pointer text-[#fff]"
              key={i}
            >
              {el.label}
            </div>
          )
        )}
      </div>
      <div className="absolute bottom-[-90px] right-[150px]">
        <NavMenu
          isOpen={showMenu}
          onClose={toggleMenu}
          content={NAV_ITEMS.at(-3).dropdown}
          setSelectedLang={setSelectedLang}
        />
      </div>
    </div>
  );
};

export default Navbar;
