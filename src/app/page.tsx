import EngagementSections from "@/components/core/Engagement/Engagement";
import Footer from "@/components/core/Footer/Footer";
import {NavbarMenu} from "@/components/core/Header/Navbar";
import HeroSection from "@/components/core/Hero/Hero";
import InfluncerSection from "@/components/core/influncer/influncer";
import MapPage from "@/components/core/map/map";
import ReelsSection from "@/components/core/reels/reels";

const HomePage = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroSection />
      <InfluncerSection />
      <MapPage />
      <ReelsSection />
      <EngagementSections/>
      <Footer/>
    </div>
  );
};

export default HomePage;
