import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const FeaturedTourGroups = () => {
  const [tourGroups] = useState([
    {
      name: "Adventure Seekers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Rzy8SQoJRyFozzwwiE083pnABY5iMAoEEw&s",
      description: "An unforgettable journey through the mountains.",
      rating: 4.9,
    },
    {
      name: "Nature Explorers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQ1-lex-KjlGAFZuB-tuDqEQFnsuX17C_ft6b-AmOhoQsWQTbARAdS6YIFTegLpan-5w&usqp=CAU",
      description: "Exploring the beauty of untouched wilderness.",
      rating: 5.0,
    },
    {
      name: "City Wanderers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRzQ3YiPG7WNKzJ-r2vsUOvq_a3P4jJSLdKIGkN1GAuDBt5isFbgoVwKW6B7_ElDjH3Q&usqp=CAU",
      description: "Discovering the hidden gems of urban landscapes.",
      rating: 4.7,
    },
  ]);

  return (
    <section
      className="py-12 bg-gray-100"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Tour Groups
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{group.name}</h3>
                <p className="text-gray-600 mt-2">{group.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  {/* Horizontal Rating Section */}
                  <div className="flex items-center">
                    {[...Array(Math.floor(group.rating))].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    {/* Show half-star if rating is not a whole number */}
                    {group.rating % 1 !== 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    )}
                    <span className="ml-2 text-sm text-gray-600">
                      {group.rating}
                    </span>
                  </div>

                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition duration-300">
                    View Group
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTourGroups;
