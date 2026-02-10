import React from "react";
import Button from "./CustomButton";
import HeroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-primary">
      <div className="flex items-center min-h-screen app-container">
        <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Designs That Speak.
              <br />
              Prints That Last.
            </h1>

            <p className="max-w-md text-base leading-relaxed text-secondary sm:text-lg">
              At Adtract, we turn ideas into visually striking prints that leave
              a lasting impression. From elegant wedding cards to bold brand
              materials, we design with precision and print with perfection.
            </p>

            <a href="#services">
              <Button variant="secondary" className="mt-8">Learn More</Button>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-lg aspect-square">
              <img
                src={HeroImage}
                alt="Designer portrait"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;