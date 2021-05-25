import React from "react";

const Stats = () => {
  return (
    <>
      <section
        className="facts-section jarallax"
        data-jarallax
        data-speed="0.3"
        data-imgposition="50% 80%"
      >
        {/* <!-- <div className="image-layer" style="background-image: url(images/background/image-1.jpg);"></div> --> */}
        <img
          src="/images/background/image-1.jpg"
          alt="background"
          className="jarallax-img"
        />
        <div className="auto-container">
          <div className="inner-container">
            <div className="fact-counter">
              <div className="row clearfix">
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="4000"
                          data-stop="8705"
                        >
                          0
                        </span>
                      </div>
                      <div className="counter-title">Projects Completed</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop="480"
                        >
                          0
                        </span>
                      </div>
                      <div className="counter-title">Active clients</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop="626"
                        >
                          0
                        </span>
                      </div>
                      <div className="counter-title">cups of coffee</div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="4000"
                          data-stop="9704"
                        >
                          0
                        </span>
                      </div>
                      <div className="counter-title">happy clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trusted-section">
        <div className="auto-container">
          <div className="outer-container">
            <div className="row clearfix">
              <div className="left-col col-xl-5 col-lg-6 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="col-header">
                    <div className="header-inner">
                      <span>
                        We’re Committed To Deliver High Quality Projects .
                      </span>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div className="count">
                        <span>01</span>
                      </div>
                      <h5>TOTAL DESIGN FREEDOM FOR EVERYONE</h5>
                      <div className="sub-text">core features</div>
                    </div>
                    <div className="feature">
                      <div className="count">
                        <span>02</span>
                      </div>
                      <h5>BASIC RULES OF RUNNING WEB AGENCY</h5>
                      <div className="sub-text">core features</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col col-xl-7 col-lg-6 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="sec-title">
                    <h2>
                      We’re trusted by more <br />
                      than 6260 clients<span className="dot">.</span>
                    </h2>
                    <div className="lower-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, simply free text by injected humour, or
                      randomised.
                    </div>
                  </div>
                  <div className="featured-block-two clearfix">
                    <div className="image">
                      <img
                        src="/images/resource/featured-image-5.jpg"
                        alt="dd"
                      />
                    </div>
                    <div className="text">
                      <ul>
                        <li> Suspe ndisse sagittis leo.</li>
                        <li>Entum estibulum is posuere.</li>
                        <li>If you are going to use passage.</li>
                        <li>Lorem Ipsum on the tend to repeat.</li>
                      </ul>
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

export default Stats;
