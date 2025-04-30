const sections = [
  {
    title: "For Brands",
    description:
      "Elevate your brand visibility with strategic influencer marketing, meme campaigns, and full-scale digital marketing. From startups to established companies, we help businesses grow faster through result-driven strategies.",
  },
  {
    title: "For Creators",
    description:
      "Work with India’s biggest brands and entertainment projects. Join our network of creators and monetize your influence through top campaigns.",
  },
  {
    title: "About Us",
    description:
      "At The Real Technologies, we specialize in Influencer Marketing, Meme Marketing, Movie Promotions, Graphic Designing, and Website Development. Our mission is to connect brands with audiences through creative, viral, and performance-driven digital strategies.",
  },
];
const services = [
  "PR Marketing",
  "Influencer Marketing",
  "Meme Marketing",
  "Website Development",
  "Movie Promotion",
  "Graphic Designing",
];

export default function EngagementSections() {
  return (
    <>
      <div className="bg-white py-16 px-4 sm:px-8 md:px-16 space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-10 gap-6 transition duration-300 ease-in-out hover:scale-[1.01]"
          >
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2 text-black">
                {section.title}
              </h3>
              <p className="text-gray-800 text-base leading-relaxed">
                {section.description}
              </p>
            </div>
            <button className="rounded-full px-6 py-3 text-white bg-black hover:bg-gray-900 transition duration-300 shadow-md">
              CONTACT US
            </button>
          </div>
        ))}
      </div>
      <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-40 h-40 flex items-center justify-center text-center text-white bg-black rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
