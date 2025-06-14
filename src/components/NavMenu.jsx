import { importConfig } from "../config/importConfig";
const NavMenu = ({ isOpen, onClose, content, setSelectedLang }) => {
  if (!isOpen) return null;
  return (
    isOpen &&
    content && (
      <div className="w-fit h-auto flex flex-col gap-2 p-3 border">
        {content.map((el, i) => (
          <button
            key={i}
            className="text-sm font-[500] cursor-pointer flex items-center justify-start gap-2 text-[#fff]"
            onClick={() => {
              setSelectedLang(el);
              onClose();
            }}
          >
            <img src={importConfig.flagIcon} alt="flagIcon" />
            {el}
          </button>
        ))}
      </div>
    )
  );
};

export default NavMenu;
