import React from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Preloader from "../components/Preloader";
import Showcase2 from "../components/Showcase/showcase2";
import Footer from "../components/Footer";
import useScript from "../useScript";
import AnimatedLearning from "../components/AnimatedLearning";
import Stats from "../components/Stats";
import Client from "../components/Client";
import Blog from "../components/Blog";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  useScript("/js/appear.js");
  useScript("/js/wow.js");
  useScript("/js/jarallax.min.js");
  useScript("/js/custom-script.js");

  return (
    <>
      <Preloader />
      <Header />
      <Showcase />
      <Showcase2 />
      {/* <AnimatedLearning /> */}
      <Stats />
      <Client />
      <Blog />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
