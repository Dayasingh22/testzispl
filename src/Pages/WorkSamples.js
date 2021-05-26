/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubsequentShowcase from "../components/Showcase/SubsequentShowcase";
import useScript from "../useScript";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  useScript("/js/appear.js");
  useScript("/js/wow.js");
  useScript("/js/jarallax.min.js");
  useScript("/js/custom-script.js");

  const filterList = [
    { name: "All", filter: ".filter-item" },
    { name: "Branding", filter: ".branding" },
    { name: "Illustration", filter: ".illustration" },
    { name: "Photography", filter: ".photography" },
    { name: "Web Design", filter: ".web-design" },
  ];

  const samples = [
    {
      image: "/images/gallery/portfolio-home-1.jpg",
      filter: "branding",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
    {
      image: "/images/gallery/portfolio-home-2.jpg",
      filter: "photography",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
    {
      image: "/images/gallery/portfolio-home-4.jpg",
      filter: "illustration",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
    {
      image: "/images/gallery/portfolio-home-3.jpg",
      filter: "web-design",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
    {
      image: "/images/gallery/portfolio-home-7.jpg",
      filter: "photography",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
    {
      image: "/images/gallery/portfolio-home-9.jpg",
      filter: "branding",
      category: "Graphic",
      title: "Fimlor Experience",
      link: "#",
    },
  ];

  return (
    <div className="page-wrapper__dark">
      <Header />
      <SubsequentShowcase page="Work Samples" />
      <section className="portfolio-masonary">
        <div className="container" style={{ marginTop: "-150px" }}>
          <h3>Showcasing Your Creative work is Easy with the Portfolio</h3>
          <hr />

          <div className="portfolio-masonary__filter-wrapper mixitup-gallery">
            <ul className="post-filter filter-btns clearfix filters has-dynamic-filter-counter">
              {filterList.map((item) => (
                <li
                  className="filter"
                  data-role="button"
                  data-filter={item.filter}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="row filter-layout masonary-layout">
            {samples.map((sample) => (
              <div
                className={`col-lg-6 filter-item masonary-item ${sample.filter} `}
                key={sample.image}
              >
                <div className="portfolio-masonary__box">
                  <img src={sample.image} alt="work-sample" />
                  <div className="portfolio-masonary__box-content">
                    <p>{sample.category}</p>
                    <h4>
                      <a href={sample.link}>{sample.title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
