import React from "react";
import Button from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const Navigate = useNavigate();
  const portfolioItems = [
    {
      id: 1,
      image: "/src/assets/images/card1.png",
      alt: "Wedding Card Design 1",
    },
    {
      id: 2,
      image: "/src/assets/images/card2.png",
      alt: "Wedding Card Design 2",
    },
    {
      id: 3,
      image: "/src/assets/images/card3.png",
      alt: "Wedding Card Design 3",
    },
  ];

  const handleNavigate = () => {
    Navigate("/wedding-cards");
  };
  return (
    <section id="portfolio" className="bg-tertiary">
      <div className="app-container section">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              Our Portfolio
            </h2>
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-secondary/80 sm:text-lg">
              Explore our collection of beautiful designs and premium prints
              that showcase our craftsmanship and attention to detail.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 rounded-lg group hover:shadow-xl"
              >
                <div className="relative w-full overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex-center">
            <Button variant="secondary" onClick={handleNavigate}>
              See More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
