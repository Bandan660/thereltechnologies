import {NavbarMenu} from "@/components/core/Header/Navbar";
import HeroSection from "@/components/core/Hero/Hero";
import InfluncerSection from "@/components/core/influncer/influncer";

const HomePage = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroSection />
      <InfluncerSection />
    </div>
  );
};

export default HomePage;
