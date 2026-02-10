import React from "react";
import Button from "./CustomButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      <div className="app-container">
        <div className="grid items-center grid-cols-1 gap-8 py-20 pt-32 lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10 space-y-6">
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

            <div className="pt-4">
              <a href="#services">
                <Button variant="secondary">Learn More</Button>
              </a>
            </div>
          </div>

          {/* Right Content - Image with Decorative Elements */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg aspect-square">
              <img
                src="../assets/images/hero.png"
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
