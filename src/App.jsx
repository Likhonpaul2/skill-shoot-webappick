import "./App.css";
import Navbar from "./components/Navbar";
import DiscountSection from "./sections/DiscountSection";
import HeroSection from "./sections/HeroSection";
import MediaSection from "./sections/MediaSection";
import ProfileSection from "./sections/ProfileSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MediaSection/>
      <DiscountSection/>
      <ProfileSection/>
    </div>
  );
}

export default App;
