import "./App.css";
import Navbar from "./components/Navbar";
import DiscountSection from "./sections/DiscountSection";
import HeroSection from "./sections/HeroSection";
import MediaSection from "./sections/MediaSection";
import ProductSection from "./sections/ProductSection";
import ProfileSection from "./sections/ProfileSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MediaSection/>
      <DiscountSection/>
      <ProfileSection/>
      <ProductSection/>
    </div>
  );
}

export default App;
