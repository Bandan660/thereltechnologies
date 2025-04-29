import InstagramReview from "@/components/instagram";

const reviews = [
  {
    url: "https://www.instagram.com/ravimantrii/?utm_source=ig_embed&ig_rid=276792af-285a-48ed-ba19-648b487ed94f",
  },
  {
    url: "https://www.instagram.com/prudhvimania/?utm_source=ig_embed&ig_rid=56c43908-f142-46c8-b584-2a018cb14e7e",
  },
  {
    url: "https://www.instagram.com/ravimantrii/?utm_source=ig_embed&ig_rid=276792af-285a-48ed-ba19-648b487ed94f",
  },
  {
    url: "https://www.instagram.com/prudhvimania/?utm_source=ig_embed&ig_rid=56c43908-f142-46c8-b584-2a018cb14e7e",
  },
];

export default function ReelsSection() {
  return (
    <div className="w-full  mt-10  ">
      <div className="text-center  mx-auto mb-5">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Our Latest Work
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          influencer collab with brands
        </p>
      </div>
      <div className="mt-5 w-full">
        <div className="flex justify-around  gap-5"> 
          {reviews.map((review, index) => (
            <InstagramReview key={index} url={review.url}  />
          ))}
        </div>
      </div>
    </div>
  );
}
