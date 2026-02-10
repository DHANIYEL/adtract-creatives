import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WeddingCardScreen = () => {
  const Navigate = useNavigate();
  const cardImages = [
    "/src/assets/images/card1.png",
    "/src/assets/images/card2.png",
    "/src/assets/images/card3.png",
    "/src/assets/images/card2.png",
    "/src/assets/images/card3.png",
    "/src/assets/images/card1.png",
  ];

  return (
    <section className="bg-tertiary ">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => Navigate(-1)}
          className="flex items-center gap-2 transition text-secondary hover:text-primary"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>
      <div className="app-container section">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              Browse The Range
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              Here are a few light, modern options. Pick the vibe you like 👇
            </p>
          </div>

          {/* Card Grid */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {cardImages.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm group hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden aspect-[3/4]">
                    <img
                      src={image}
                      alt={`Wedding card design ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {cardImages.map((image, index) => (
                <div
                  key={`row2-${index}`}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm group hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden aspect-[3/4]">
                    <img
                      src={image}
                      alt={`Wedding card design ${index + 7}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {cardImages.map((image, index) => (
                <div
                  key={`row3-${index}`}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm group hover:shadow-lg"
                >
                  <div className="relative w-full overflow-hidden aspect-[3/4]">
                    <img
                      src={image}
                      alt={`Wedding card design ${index + 13}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* See More Button */}
          <div className="pt-8 flex-center">
            <CustomButton variant="secondary">See More</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCardScreen;
