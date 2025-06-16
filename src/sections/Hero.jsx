import HeroForm from "../components/HeroForm";
import HeroText from "../components/HeroText";
import { importConfig } from "../config/importConfig";
import Navbar from "./Navbar";

const LOGOS = [
  { icon: importConfig.etihadLogo },
  { icon: importConfig.airCanada },
  { icon: importConfig.etihadLogo },
  { icon: importConfig.airCanada },
];

const Hero = () => {
  return (
    <div
      className="w-full max-h-[750px] min-h-[750px] flex flex-col relative"
      style={{
        backgroundImage: `url(${importConfig.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="flex justify-between px-8 h-[600px]">
        <div className="h-full">
          <HeroText />
        </div>
        <div className="absolute bottom-8 right-32">
          <HeroForm />
        </div>
      </div>
      <div className="h-[75px] max-w-[800px] absolute bottom-4 left-0 flex items-center justify-center">
        {LOGOS.map((el, i) => (
          <div key={i}>
            <img src={el.icon} alt="icon" key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
