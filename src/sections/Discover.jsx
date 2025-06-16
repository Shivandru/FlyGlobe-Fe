import DiscoverLeft from "../components/DiscoverLeft";
import DiscoverRight from "../components/DiscoverRight";

const Discover = () => {
  return (
    <div className="w-full px-[61px] h-[700px] flex items-center justify-between">
      <DiscoverLeft />
      <DiscoverRight />
    </div>
  );
};

export default Discover;
