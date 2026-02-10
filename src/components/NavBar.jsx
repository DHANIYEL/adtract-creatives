import React, { useState } from "react";
import Button from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleNavigate = () => {
    navigate("/wedding-cards");
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-primary">
      <div className="app-container">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <a href="/">
            <img
              src="../assets/logo/Adtract-logo.svg"
              alt="logo"
              className="w-16 h-16 cursor-pointer md:w-20 md:h-20"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button onClick={handleNavigate}>Wedding Cards</Button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Slide Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-secondary 
        transform transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <img
            src="../assets/logo/Adtract-logo.svg"
            alt="logo"
            className="w-16 h-16"
          />
          <button onClick={closeMenu} className="text-white">
            <X size={26} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col items-center gap-6 py-10">
          <a href="#about" className="nav-link" onClick={closeMenu}>
            About
          </a>
          <a href="#services" className="nav-link" onClick={closeMenu}>
            Services
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>

          <Button onClick={handleNavigate} className="w-4/5 mt-4">
            Wedding Cards
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
