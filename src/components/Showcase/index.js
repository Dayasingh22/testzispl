import React from "react";

const Showcase = () => {
  const data = [
    {
      subTitle: "welcome to ZISBV agency",
      title1: "Smart Web",
      title2: "Design Agency",
      link: "/about",
      image: "/images/main-slider/1.jpg",
    },
    {
      subTitle: "welcome to Linoor agency",
      title1: "Smart Web",
      title2: "Development Agency",
      link: "/about",
      image: "/images/main-slider/2.jpg",
    },
  ];

  const services = [
    {
      delay: "0ms",
      duration: "1500ms",
      icon: "flaticon-responsive",
      link: "/web",
      title1: "Website",
      title2: "Development",
    },
    {
      delay: "300ms",
      duration: "1500ms",
      icon: "flaticon-computer",
      link: "/graphic",
      title1: "Graphic",
      title2: "Designing",
    },
    {
      delay: "0ms",
      duration: "1500ms",
      icon: "flaticon-digital-marketing",
      link: "/web",
      title1: "Digital",
      title2: "Marketing",
    },
    {
      delay: "300ms",
      duration: "1500ms",
      icon: "flaticon-development",
      link: "/web",
      title1: "Seo & Content",
      title2: "Writing",
    },
    {
      delay: "600ms",
      duration: "1500ms",
      icon: "flaticon-app-development",
      link: "/web",
      title1: "App",
      title2: "Development",
    },
    {
      delay: "900ms",
      duration: "1500ms",
      icon: "flaticon-ui",
      link: "/web",
      title1: "UI/UX",
      title2: "Designing",
    },
  ];

  return (
    <>
      <section className="banner-section banner-one">
        <div className="left-based-text">
          <div className="base-inner">
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Youtube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="banner-carousel owl-theme owl-carousel">
          {data.map((item) => (
            <div className="slide-item" key={item.title2}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="left-top-line"></div>
              <div className="right-bottom-curve"></div>
              <div className="right-top-curve"></div>
              <div className="auto-container">
                <div className="content-box">
                  <div className="content">
                    <div className="inner">
                      <div className="sub-title">{item.subTitle}</div>
                      <h1>
                        {item.title1} <br />
                        {item.title2}
                      </h1>
                      <div className="link-box">
                        <a className="theme-btn btn-style-one" href={item.link}>
                          <i className="btn-curve"></i>
                          <span className="btn-title">Discover More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="services-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="title-block col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    We Shape the Perfect <br />
                    Solutions<span className="dot">.</span>
                  </h2>
                  <div className="lower-text">
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                  </div>
                </div>
              </div>
            </div>
            {services.map((service) => (
              <div
                className="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
                data-wow-delay={service.delay}
                data-wow-duration={service.duration}
                key={service.title1}
              >
                <div className="inner-box">
                  <div className="bottom-curve"></div>
                  <div className="icon-box">
                    <span className={service.icon}></span>
                  </div>
                  <h6>
                    <a href={service.link}>
                      {service.title1} <br />
                      {service.title2}
                    </a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
