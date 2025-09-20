import "./App.css";
import Navbar from "./components/Navbar";
import DiscountSection from "./sections/DiscountSection";
import HeroSection from "./sections/HeroSection";
import MediaSection from "./sections/MediaSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MediaSection/>
      <DiscountSection/>
    </div>
  );
}

export default App;
