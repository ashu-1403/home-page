import React, { useState } from "react";

const testimonials = [
  {
    name: "Robert A. Voltaire",
    image: "https://runscope.com/static/img/public/customer-portrait-human-api.png",
    role: "Store link",
    rating: 5,
    feedback:
      "Printify has been an incredible service for us musicians unable to keep large amounts of inventory. Now we can create designs previously too expensive to print. Thanks Printify!"
  },
  {
    name: "Quinten Barney",
    image: "https://img.freepik.com/free-photo/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spirit-wears-white-shirt-rejoices-positive-moments-life-people-emotions-concept_273609-15527.jpg",
    role: "Etsy Merchant",
    rating: 5,
    feedback:
      "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've found that their customer service is also top-notch."
  },
  {
    name: "Nikki",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-olly-774909.jpg&fm=jpg",
    role: "Store link",
    rating: 5,
    feedback:
      "Printify has been amazing for helping us grow our business. Their support team makes the whole process a breeze."
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-12 bg-gray-100 mt-32 mb-36">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3 text-gray-800">
          Trusted by over 8M sellers around the world
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="md:w-20 md:h-20 h-16 w-16 rounded-full mr-6 border-4 border-green-400"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
              <p className="text-green-500 font-medium">{testimonials[currentIndex].role}</p>
              <div className="flex text-yellow-400 mt-2">
                {Array(testimonials[currentIndex].rating).fill().map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .288l2.833 8.718h9.167l-7.417 5.392 2.833 8.718-7.416-5.39-7.417 5.39 2.833-8.718-7.416-5.392h9.167z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonials[currentIndex].feedback}"</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 font-bold p-4 rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <svg
            xmlns="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 font-bold p-4 rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;