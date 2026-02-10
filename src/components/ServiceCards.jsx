import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCards = ({ image, title, description }) => {
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/services");
  };
  return (
    <div
      className="overflow-hidden transition-all duration-300 bg-white shadow-sm card hover:shadow-lg"
      onClick={handleNavigate}
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-secondary sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
          {description}
        </p>

        {/* View Button */}
        <button
          //   onClick={() => link && window.location.href = link}
          className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 text-secondary hover:text-primary group"
        >
          View
          <ChevronRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;
