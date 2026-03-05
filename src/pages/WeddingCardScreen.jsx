import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WeddingCardScreen = () => {
  const Navigate = useNavigate();

  // generate images from 1-11
  const cardImages = Array.from({ length: 21 }, (_, i) => `/wedding-cards/${i + 1}.jpeg`);

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
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {cardImages.map((image, index) => (
              <div
                key={index}
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