import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Image from "next/image";
import React from "react";

const MapPage = () => {
  return (
    <section className="my-5 w-full flex justify-center flex-wrap">
      <div className="lg:w-1/2 md:w-full flex flex-col items-start justify-center   px-10 py-10">
        <h1 className="text-3xl font-bold">
          Powerfull influencer <br />
          Marketing Awaiits
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We are india &apos;s largest influencer marketing agency with a
          presence in 11 states and strong network of 100+ leading brands.From
          content-driven strategies to impactful collaborations, we turn ideas
          into campaigns that deliver real results.
        </p>
        <ShimmerButton className=" mt-3">Contact us</ShimmerButton>
      </div>
      <div className="lg:w-1/2 md:w-full flex justify-center">
        <Image src="/assets/map.png" alt="map" width={400} height={400} />
      </div>
    </section>
  );
};

export default MapPage;
