import React from "react";
import "./App.css";
import Testimonial from "./pages/Testimonial";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <section>
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Portfolio />
      <Footer />
    </section>
  );
};

export default App;
