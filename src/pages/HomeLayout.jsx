import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Portfolio />
      <Footer />
    </>
  );
};

export default HomeLayout;