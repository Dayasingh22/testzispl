import React from "react";

const WorkSamples = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="auto-container">
          <div className="mixitup-gallery">
            <div className="upper-row clearfix">
              <div className="sec-title">
                <h2>
                  work showcase<span className="dot">.</span>
                </h2>
              </div>
              <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                  <li
                    className="active filter"
                    data-role="button"
                    data-filter="all"
                  >
                    All<sup>[6]</sup>
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".branding"
                  >
                    Branding<sup>[3]</sup>
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".illustration"
                  >
                    illustration<sup>[3]</sup>
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".photography"
                  >
                    Photography<sup>[3]</sup>
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".web-design"
                  >
                    Web Design<sup>[4]</sup>
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-list row">
              <div className="gallery-item mix all web-design col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/1.jpg" alt="image" />
                  </figure>
                  <a
                    href="/images/gallery/1.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-item mix all photography web-design col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/2.jpg" alt="image" />
                  </figure>
                  <a
                    href="/images/gallery/2.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/3.jpg" alt="image" />
                  </figure>
                  <a
                    href="/images/gallery/3.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/4.jpg" alt="image" />
                  </figure>
                  <a
                    href="/images/gallery/4.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/5.jpg" alt="image" />
                  </figure>
                  <a
                    href="/images/gallery/5.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <img src="/images/gallery/6.jpg" alt="img" />
                  </figure>
                  <a
                    href="/images/gallery/6.jpg"
                    className="lightbox-image overlay-box"
                    data-fancybox="gallery"
                  ></a>
                  <div className="cap-box">
                    <div className="cap-inner">
                      <div className="cat">
                        <span>Graphic</span>
                      </div>
                      <div className="title">
                        <h5>
                          <a href="portfolio-single.html">Fimlor Experience</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSamples;
