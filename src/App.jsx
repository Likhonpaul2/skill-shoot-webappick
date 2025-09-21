import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import DiscountSection from "./sections/DiscountSection";
import FooterSeciton from "./sections/FooterSeciton";
import HeroSection from "./sections/HeroSection";
import JoinSection from "./sections/JoinSection";
import MediaSection from "./sections/MediaSection";
import PriceSection from "./sections/PriceSection";
import ProductSection from "./sections/ProductSection";
import ProfileSection from "./sections/ProfileSection";
import TestimoniSection from "./sections/TestimoniSection";

function App() {
  
  // App title 
  useEffect(()=>{
    document.title ="Skill Shoot"
  },[])

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
      <FooterSeciton/>
    </div>
  );
}

export default App;
