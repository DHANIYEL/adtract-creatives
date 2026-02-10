import React, { useState } from 'react';
import { Phone, Mail, MapPin, Twitter, Instagram, Dribbble, Facebook } from 'lucide-react';
import Button from '../components/CustomButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      text: '+1205 5872 321',
      link: 'tel:+12055872321'
    },
    {
      icon: Mail,
      text: 'contact@sarajonesdesign.com',
      link: 'mailto:contact@sarajonesdesign.com'
    },
    {
      icon: MapPin,
      text: '1234 Design Street, Creativeville, Webland, Imaginary State, 98765',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      link: '#',
      label: 'Twitter'
    },
    {
      icon: Instagram,
      link: '#',
      label: 'Instagram'
    },
    {
      icon: Dribbble,
      link: '#',
      label: 'Dribbble'
    },
    {
      icon: Facebook,
      link: '#',
      label: 'Facebook'
    }
  ];

  return (
    <section id="contact" className="bg-light">
      <div className="app-container section">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
                Get in Touch
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 transition-colors duration-200 group hover:text-primary"
                  >
                    <div className="flex-shrink-0 p-2">
                      <Icon size={20} className="text-secondary group-hover:text-primary" />
                    </div>
                    <span className="text-base text-gray-700 group-hover:text-primary">
                      {item.text}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-200 bg-white rounded-full hover:bg-primary hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="6"
                  className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-400"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button 
                  variant="secondary" 
                  className="w-full sm:w-auto"
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;