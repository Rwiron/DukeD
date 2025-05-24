import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Okasa Saleh",
      role: "Real Estate Developer",
      image:
        "https://st4.depositphotos.com/12071432/21067/i/450/depositphotos_210679084-stock-photo-smiling-african-american-businessman-holding.jpg",
      quote:
        "Duke Developers transformed our property into a modern space that truly feels like home. I appreciated their patience, ideas, and dedication throughout the entire project.",
    },
    {
      id: 2,
      name: "William Carter",
      role: "IT Consultant",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "Their IT team helped us rebuild our system from the ground up. Security, speed, and ease-of-use—Duke Developers delivered on all fronts.",
    },
    {
      id: 3,
      name: "Nyasha Mbaye",
      role: "Project Supervisor",
      image:
        "https://news.providence.edu/files/2021/01/smith-purviance-256x300.jpg",
      quote:
        "From the very first meeting, I could tell they truly listened. They met every deadline and brought clarity to even the most complex parts of the project.",
    },
    {
      id: 4,
      name: "Sarah Parker",
      role: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote:
        "Working with Duke Developers felt like a partnership. Their team was respectful, reliable, and always a step ahead.",
    },
    {
      id: 5,
      name: "Samuel Dorley",
      role: "Architect",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "We had a bold vision for our new space, and they brought it to life exactly the way we imagined—maybe even better.",
    },
    {
      id: 6,
      name: "Elena Fischer",
      role: "Interior Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Every design choice was thoughtful. Duke Developers understands both beauty and function, and it shows in their work.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it - hear what our satisfied clients have to say about our work."
        />

        <div className="mt-16 relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-50 shadow-md">
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <svg
                  className="w-10 h-10 text-gray-200 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 text-lg mb-6 italic">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
