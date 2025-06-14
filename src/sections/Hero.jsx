import HeroForm from "../components/HeroForm";
import { importConfig } from "../config/importConfig";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="w-full h-[750px] flex flex-col"
      style={{
        backgroundImage: `url(${importConfig.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="flex justify-between">
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
