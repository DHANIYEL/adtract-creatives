import React from "react";
import Button from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="app-container">
        <div className="py-4 flex-between">
          {/* Logo */}
          <div className="flex-start">
            <img
              src="/assets/logo/Adtract-logo.svg"
              alt="logo"
              className="w-28 h-28"
            />
          </div>

          {/* Navigation Links */}
          <div className="gap-8 flex-center">
            <a
              href="#about"
              className="text-white transition-colors duration-200 hover:text-light"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white transition-colors duration-200 hover:text-light"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white transition-colors duration-200 hover:text-light"
            >
              Contact
            </a>
          </div>
          <Button
            onClick={() => {}}
            // variant="secondary"
          >
            Wedding Cards
          </Button>
          {/* CTA Button */}
          {/* <div>
            <button className="px-6 py-2 font-medium transition-all duration-200 bg-white rounded text-primary hover:bg-tertiary">
              Wedding Cards
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
