import "./App.css";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import DiscountSection from "./sections/DiscountSection";
import HeroSection from "./sections/HeroSection";
import JoinSection from "./sections/JoinSection";
import MediaSection from "./sections/MediaSection";
import PriceSection from "./sections/PriceSection";
import ProductSection from "./sections/ProductSection";
import ProfileSection from "./sections/ProfileSection";
import TestimoniSection from "./sections/TestimoniSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MediaSection/>
      <DiscountSection/>
      <ProfileSection/>
      <ProductSection/>
      <AboutSection/>
      <JoinSection/>
      <PriceSection/>
      <TestimoniSection/>
    </div>
  );
}

export default App;
