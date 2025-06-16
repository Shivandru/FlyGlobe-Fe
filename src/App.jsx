import "./App.css";
import BestOffers from "./sections/BestOffers";
import Discover from "./sections/Discover";
import Explore from "./sections/Explore";
import Footer from "./sections/Footer";
import GetStarted from "./sections/GetStarted";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Travellers from "./sections/Travellers";

function App() {
  return (
    <div className="h-auto w-full flex flex-col gap-20">
      <Hero />
      <BestOffers />
      <Discover />
      <Explore />
      <Travellers />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
