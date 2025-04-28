import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { NavbarButton } from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const reviews = [
  {
    img: "/assets/img-1.png",
  },
  {
    img: "/assets/img-2.jpg",
  },
  {
    img: "/assets/img-3.jpg",
  },
  {
    img: "/assets/img-4.jpg",
  },
  {
    img: "/assets/img-5.jpg",
  },
  {
    img: "/assets/img-6.jpg",
  },
  {
    img: "/assets/img-7.jpg",
  },
  {
    img: "/assets/img-8.jpg",
  },
  {
    img: "/assets/img-9.jpg",
  },
  {
    img: "/assets/img-10.jpg",
  },
  {
    img: "/assets/img-11.jpg",
  },
  {
    img: "/assets/img-12.png",
  },
  {
    img: "/assets/img-13.jpg",
  },
  {
    img: "/assets/img-14.jpg",
  },
  {
    img: "/assets/img-15.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-50 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image fill alt="img" src={img} />
      </div>
    </figure>
  );
};

export default function InfluncerSection() {
  return (
    <div className="w-full  mt-10  ">
      <div className="text-center  mx-auto mb-5">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          To connect with top influencers across india
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Contact us today and let's build your next viral campaign
        </p>
        <ShimmerButton className="mx-auto mt-3">Contact us</ShimmerButton>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
