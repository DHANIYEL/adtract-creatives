import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceScreen = () => {
  const Navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Brand Identity & Print",
      description:
        "Consistent branding across logos, stationery, and print materials.",
      images: [
        {
          src: "/assets/images/card1.png",
          alt: "Brand materials 1",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card2.png",
          alt: "Brand materials 2",
          colSpan: "col-span-1",
        },
      ],
      layout: "right-images",
    },
    {
      id: 2,
      title: "Visiting Cards",
      description: "Clean, professional card designs with premium finishes.",
      images: [
        {
          src: "/assets/images/card1.png",
          alt: "Business card 1",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card2.png",
          alt: "Business card 2",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card3.png",
          alt: "Business card 3",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card1.png",
          alt: "Business card 4",
          colSpan: "col-span-1",
        },
      ],
      layout: "left-images",
    },
    {
      id: 3,
      title: "Brochures & Flyers",
      description: "Well-structured layouts designed for clear communication.",
      images: [
        {
          src: "/assets/images/card2.png",
          alt: "Brochure 1",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card3.png",
          alt: "Brochure 2",
          colSpan: "col-span-1",
        },
      ],
      layout: "right-images",
    },
    {
      id: 4,
      title: "Custom Print Works",
      description: "Tailored print solutions for unique requirements.",
      images: [
        {
          src: "/assets/images/card1.png",
          alt: "Custom print 1",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card2.png",
          alt: "Custom print 2",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card3.png",
          alt: "Custom print 3",
          colSpan: "col-span-1",
        },
      ],
      layout: "left-images",
    },
    {
      id: 5,
      title: "Digital Design",
      description: "Clean visuals created for digital platforms and campaigns.",
      images: [
        {
          src: "/assets/images/card1.png",
          alt: "Digital design 1",
          colSpan: "col-span-1",
        },
        {
          src: "/assets/images/card2.png",
          alt: "Digital design 2",
          colSpan: "col-span-1",
        },
      ],
      layout: "right-images",
    },
  ];

  return (
    <section className="bg-tertiary">
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
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
              A selection of our design and print work, crafted with attention
              to detail and purpose.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 gap-8 items-center ${
                  service.layout === "left-images"
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-2"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-4 ${
                    service.layout === "right-images"
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Images Grid */}
                <div
                  className={`${
                    service.layout === "right-images"
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <div
                    className={`grid gap-4 ${
                      service.images.length === 4
                        ? "grid-cols-2"
                        : service.images.length === 3
                          ? "grid-cols-3"
                          : "grid-cols-2"
                    }`}
                  >
                    {service.images.map((image, index) => (
                      <div
                        key={index}
                        className={`overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md group hover:shadow-xl ${image.colSpan}`}
                      >
                        <div className="relative w-full overflow-hidden aspect-square">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScreen;
