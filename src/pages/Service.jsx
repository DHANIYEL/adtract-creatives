import React from "react";
import ServiceCards from "../components/ServiceCards";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/Image.png";
import img2 from "../assets/images/Image-1.png";
import img3 from "../assets/images/Image-2.png";

const Service = () => {
  const services = [
    {
      id: 1,
      image: img1,
      title: "Wedding Cards",
      description:
        "Elegant, traditional, and modern wedding invitations crafted to reflect your story.",
    },
    {
      id: 2,
      image: img2,
      title: "Brand Identity & Logo Design",
      description:
        "Visual identities that define your brand and make it instantly recognizable.",
    },
    {
      id: 3,
      image: img3,
      title: "Visiting Cards & Stationery",
      description:
        "Professionally designed business cards and office stationery with premium finishes.",
    },
  ];

  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/services");
  };
  return (
    <section id="services" className="bg-tertiary">
      <div className="app-container section">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
              Services
            </h2>
            <p className="max-w-3xl mx-auto text-base text-gray-600 sm:text-lg">
              We offer complete design and printing solutions tailored to your
              style, purpose, and budget.
            </p>
          </div>

          {/* View All Button - Top Right */}
          <div className="flex justify-end">
            <button
              onClick={handleNavigate}
              className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 text-secondary hover:text-primary group"
            >
              View All
              <ChevronRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCards
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
