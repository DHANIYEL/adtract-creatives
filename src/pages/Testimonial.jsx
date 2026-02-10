import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Adtract delivered exactly what we imagined—beautiful designs, premium print quality, and on-time delivery. Our wedding cards received endless compliments!",
      name: "Rizwan",
      company: "Matajar Groups",
      image: "/src/assets/images/person.png"
    },
    {
      id: 2,
      text: "Outstanding service and attention to detail. The team at Adtract transformed our brand identity with creative designs that truly represent who we are.",
      name: "Sarah Johnson",
      company: "Tech Innovations",
      image: "/src/assets/images/person.png"
    },
    {
      id: 3,
      text: "Professional, creative, and reliable. Adtract's printing quality is exceptional, and their customer service goes above and beyond expectations.",
      name: "Michael Chen",
      company: "Creative Studios",
      image: "/src/assets/images/person.png"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-primary">
      <div className="app-container section">
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 z-10 p-3 text-white transition-all duration-200 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Testimonial Content */}
          <div className="max-w-4xl px-12 mx-auto text-center md:px-20">
            <div className="space-y-8">
              {/* Title */}
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Testimonials
              </h2>

              {/* Testimonial Text */}
              <div className="min-h-[120px] flex items-center justify-center">
                <p className="text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                  {testimonials[currentIndex].text}
                </p>
              </div>

              {/* Client Info */}
              <div className="gap-4 flex-col-center">
                {/* Client Image */}
                <div className="w-20 h-20 overflow-hidden border-4 border-white rounded-full sm:w-24 sm:h-24">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Client Name and Company */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-white/80 sm:text-base">
                    / {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-3 text-white transition-all duration-200 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;