import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="app-container">
        <div className="grid items-center min-h-screen grid-cols-1 gap-8 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="z-10 space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Designs That Speak.
              <br />
              Prints That Last.
            </h1>
            
            <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              At Adtract, we turn ideas into visually striking prints that leave a lasting impression. From elegant wedding cards to bold brand materials, we design with precision and print with perfection.
            </p>

            <div className="pt-4">
              <button className="px-8 py-3 font-medium text-white transition-all duration-200 rounded bg-secondary hover:bg-secondary/90">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Content - Image with Decorative Elements */}
          <div className="relative z-10">
            <div className="relative">
              {/* Decorative Background Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Large UX Text */}
                  <div className="absolute inset-0 flex items-center justify-end pr-0">
                    <span className="text-[200px] font-bold text-primary/20 leading-none select-none">
                      UX
                    </span>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-1/4 left-1/4">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M10 30 Q 20 10, 30 30 T 50 30" stroke="white" strokeWidth="3" fill="none"/>
                    </svg>
                  </div>

                  <div className="absolute bottom-1/4 right-1/4">
                    <div className="space-y-2">
                      <div className="w-10 h-1 rotate-45 bg-white"></div>
                      <div className="w-10 h-1 rotate-45 bg-white"></div>
                      <div className="w-10 h-1 rotate-45 bg-white"></div>
                    </div>
                  </div>

                  {/* Small decorative dots/shapes */}
                  <div className="absolute w-3 h-3 bg-white rounded-full top-1/3 right-1/3"></div>
                  <div className="absolute w-4 h-4 rotate-45 border-2 border-white rounded-sm bottom-1/3 left-1/2"></div>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="relative w-full max-w-md overflow-hidden rounded-lg aspect-square">
                  {/* Placeholder for the woman's image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/60">
                    {/* Replace this div with your actual image */}
                    <img 
                      src="/assets/images/hero.png" 
                      alt="Designer portrait"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Overlay decorative elements on image */}
                  {/* <div className="absolute top-8 left-8">
                    <div className="p-4 rounded-lg bg-light/20 backdrop-blur-sm">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M5 20 L15 10 L25 20 L35 10" stroke="white" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8">
                    <div className="flex flex-col gap-2">
                      <div className="w-8 h-8 transform rotate-45 bg-white"></div>
                      <div className="w-8 h-8 transform rotate-45 bg-white"></div>
                      <div className="w-8 h-8 transform rotate-45 bg-white"></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 right-0 z-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-white/10 blur-3xl"></div>
          <div className="absolute w-64 h-64 rounded-full bottom-1/4 right-1/3 bg-white/10 blur-2xl"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;