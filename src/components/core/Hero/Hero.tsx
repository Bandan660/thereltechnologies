import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import AnimatedHeroText from "./HeroTitle";

function HeroSection() {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center h-screen w-full ">
      <AnimatedHeroText />
      <h2 className="text-2xl  md:text-3xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans tracking-tight mt-5">
        Building india&apos;s Biggest
      </h2>
      <div className=" text-2xl  md:text-3xl lg:text-6xl font-bold text-center bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
        <span className="">Marketing Agency.</span>
      </div>
      <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
        With AI, you can launch your website in hours, not days. Try our best in
        class, state of the art, cutting edge AI tools to get your website up.
      </p>
      <div className="flex  items-center gap-5 mt-4">
        <ShimmerButton>See our work</ShimmerButton>

        <InteractiveHoverButton>Book a call</InteractiveHoverButton>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default HeroSection;
