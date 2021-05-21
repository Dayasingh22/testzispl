import React from "react";

const Showcase2 = () => {
  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div
                  className="image-block wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img src="/images/resource/featured-image-1.jpg" alt="ff" />
                </div>
                <div
                  className="image-block wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <img src="/images/resource/featured-image-2.jpg" alt="ff" />
                </div>
              </div>
            </div>
            <div className="text-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    We’re the best agency <br />
                    in downtown<span className="dot">.</span>
                  </h2>
                  <div className="lower-text">
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                  </div>
                </div>
                <div className="text">
                  <p>
                    Lorem Ipsum is simply dummy text of free available in market
                    the printing and typesetting industry has been the
                    industry's standard dummy text ever.
                  </p>
                </div>
                <div className="text clearfix">
                  <ul>
                    <li>Suspe ndisse suscipit sagittis leo.</li>
                    <li>Entum estibulum dignissim posuere.</li>
                    <li>If you are going to use a passage.</li>
                  </ul>
                  <div className="since">
                    <span className="txt">
                      Since <br />
                      2008
                    </span>
                  </div>
                </div>
                <div className="link-box">
                  <a className="theme-btn btn-style-one" href="about.html">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="live-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              Experience us live<span className="dot">.</span>
            </h2>
          </div>
          <div className="main-image-box">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(images/resource/featured-image-3.jpg)",
              }}
            ></div>
            <div className="inner clearfix">
              <div
                className="round-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="round-inner">
                  <div className="vid-link">
                    <a
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="lightbox-image"
                    >
                      <div className="icon">
                        <span className="flaticon-play-button-1"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <div className="title">
                    <h3>
                      agency that gets <br />
                      excited about
                    </h3>
                  </div>
                  <div className="more-link">
                    <a href="about.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="we-do-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="left-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    We do more then ever <br />
                    platforms<span className="dot">.</span>
                  </h2>
                </div>
                <div className="featured-block clearfix">
                  <div className="image">
                    <img src="/images/resource/featured-image-4.jpg" alt="dd" />
                  </div>
                  <div className="text">
                    There are many variatns of passages the majority have
                    suffered alteration in some foor randomised words
                    believable.
                  </div>
                </div>
                <div className="progress-box">
                  <div className="bar-title">Digital marketing</div>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="70%">
                      <div className="count-box">
                        <span
                          className="count-text"
                          data-stop="70"
                          data-speed="1500"
                        >
                          0
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-col col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <div className="faq-box">
                  <ul className="accordion-box clearfix">
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        <span className="count">1.</span> We help to create
                        visual strategies
                      </div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div className="acc-btn">
                        <span className="count">2.</span> Motion Graphics &
                        Animations
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div className="acc-btn">
                        <span className="count">3.</span> We help to achieve
                        mutual goals
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            There are many variations of passages the majority
                            have suffered alteration in some fo injected humour,
                            or randomised words believable.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase2;
