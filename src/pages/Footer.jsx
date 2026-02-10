import React from "react";
import Contact from "../components/Contact";
import { Instagram, Twitter, Dribbble, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer>
      <Contact />

      <div className="bg-secondary">
        <div className="py-12 app-container">
          <div className="gap-8 flex-col-center">
            {/* Navigation Links + Center Logo (Responsive) */}
            <div className="w-full">
              {/* Desktop / Tablet Layout */}
              <div className="hidden md:grid items-center grid-cols-[1fr_auto_1fr] gap-16">
                {/* Left Links */}
                <div className="flex justify-end gap-8">
                  {footerLinks.slice(0, 2).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-light"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                  <a href="/">
                    <img
                      src="../assets/logo/Adtract-logo.svg"
                      alt="logo"
                      className="w-24 h-24"
                    />
                  </a>
                </div>

                {/* Right Links */}
                <div className="flex justify-start gap-8">
                  {footerLinks.slice(2, 4).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-white transition-colors duration-200 hover:text-light"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="flex flex-col items-center gap-6 md:hidden">
                {/* Logo */}
                <a href="/">
                  <img
                    src="../assets/logo/Adtract-logo.svg"
                    alt="logo"
                    className="w-20 h-20"
                  />
                </a>

                {/* Links 2x2 Grid */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-center text-white transition-colors duration-200 hover:text-light"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="gap-4 flex-col-center">
              <p className="text-sm text-white/70">
                Follow me on social media:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 text-white transition-all duration-200 border rounded-full border-white/20 hover:bg-white hover:text-secondary"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
