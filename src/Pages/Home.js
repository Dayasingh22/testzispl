import React, { useEffect } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Library from "../components/Library";
import Preloader from "../components/Preloader";
import Showcase2 from "../components/Showcase/showcase2";
import Footer from "../components/Footer";
import useScript from "../useScript";
import AnimatedLearning from "../components/AnimatedLearning";
import WorkSamples from "../components/WorkSamples";

const Home = () => {
  // const addScript = (url) => {
  //   const script = document.createElement("script");
  //   script.src = url;
  //   script.async = true;
  //   document.body.appendChild(script);
  // };

  // useEffect(() => {
  //   addScript("/js/jquery.js");
  //   addScript("/js/popper.min.js");
  //   addScript("/js/bootstrap.min.js");
  //   addScript("/js/TweenMax.js");
  //   addScript("/js/jquery-ui.js");
  //   addScript("/js/jquery.fancybox.js");
  //   addScript("/js/owl.js");
  //   addScript("/js/mixitup.js");
  //   addScript("/js/appear.js");
  //   addScript("/js/wow.js");
  //   addScript("/js/jarallax.min.js");
  //   addScript("/js/custom-script.js");
  // }, []);

  useScript("/js/jquery.js");
  useScript("/js/popper.min.js");
  useScript("/js/bootstrap.min.js");
  useScript("/js/TweenMax.js");
  useScript("/js/jquery-ui.js");
  useScript("/js/jquery.fancybox.js");
  useScript("/js/owl.js");
  useScript("/js/mixitup.js");
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
      <AnimatedLearning />
      <WorkSamples />
      <Footer />
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Home;
