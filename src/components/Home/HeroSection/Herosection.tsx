import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./HeroSection.css"; // Ensure this file exists for custom styles

import slide1 from "../../../assets/SliderImg/sliderimg1.jpg";
import slide2 from "../../../assets/SliderImg/sliderimg2.jpg";
import slide3 from "../../../assets/SliderImg/sliderimg3.jpg";
import slide4 from "../../../assets/SliderImg/sliderimg4.jpg";

const HeroSection = () => {
  const slides_data = [
    {
      image: slide1,
      title: "Embark on Your Camper Journey",
      description: "Find the ideal camper to elevate your outdoor experiences.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "Learn More",
      aboutUsLink: "/about-us",
    },
    {
      image: slide2,
      title: "Campers Built for Every Adventure",
      description:
        "Explore our range of durable campers tailored for any trip.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "Learn More",
      aboutUsLink: "/about-us",
    },
    {
      image: slide3,
      title: "Adventure Awaits with Our Campers",
      description: "Prepare for your journey with our top-of-the-line campers.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "Learn More",
      aboutUsLink: "/about-us",
    },
    {
      image: slide4,
      title: "Discover the Perfect Camper",
      description:
        "Browse our collection to find a camper that suits your style.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      aboutUsText: "Learn More",
      aboutUsLink: "/about-us",
    },
  ];

  return (
    <div className="hero-section mt-16">
      <Carousel
        className="main-slide"
        autoPlay={true}
        axis="vertical"
        interval={3000}
        infiniteLoop={true}
      >
        {slides_data.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] md:h-[600px] lg:h-[900px] object-cover"
            />
            <div className="slide-content absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-2xl md:text-4xl  lg:text-5xl font-bold">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mt-2">
                {slide.description}
              </p>
              <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                {/* Primary Button */}
                <a
                  href={slide.buttonLink}
                  className="bg-blue-500 text-white font-semibold py-2 px-6 md:px-8 rounded-md hover:bg-blue-600 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {slide.buttonText}
                </a>

                {/* Secondary Button */}
                <a
                  href={slide.aboutUsLink}
                  className="border border-black-500 text-white-500 font-semibold py-2 px-6 md:px-8 rounded-md hover:bg-slate-950 hover:text-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  {slide.aboutUsText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
