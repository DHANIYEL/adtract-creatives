import React from 'react';

const About = () => {
  const stats = [
    {
      number: "5000+",
      label: "Designs Delivered"
    },
    {
      number: "10+",
      label: "Years of Experience"
    },
    {
      number: "273+",
      label: "Happy Clients"
    }
  ];

  return (
    <section id='about' className="bg-secondary">
      <div className="app-container section">
        <div className="gap-12 flex-col-center">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-tertiary sm:text-4xl lg:text-5xl">
              About Us
            </h2>
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-tertiary/80 sm:text-lg">
              Adtract is a creative printing and design studio dedicated to crafting high-quality visual experiences. With a deep understanding of design aesthetics and print techniques, we help brands and individuals bring their ideas to life—beautifully, professionally, and on time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid w-full grid-cols-1 gap-8 pt-8 md:grid-cols-3 text-light">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="gap-3 flex-col-center"
              >
                <h3 className="text-5xl font-bold text-light sm:text-6xl lg:text-7xl">
                  {stat.number}
                </h3>
                <p className="text-base font-medium text-light/80 sm:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;