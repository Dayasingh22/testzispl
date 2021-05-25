import React from "react";

const Client = () => {
  return (
    <>
      <section
        className="parallax-section jarallax"
        data-jarallax
        data-speed="0.3"
        data-imgposition="50% 80%"
      >
        {/* <!-- <div className="image-layer" style="background-image: url(images/background/image-2.jpg);"></div> --> */}
        <img
          src="/images/background/image-2.jpg"
          alt="dd"
          className="jarallax-img"
        />
        <div className="auto-container">
          <div className="content-box">
            <div className="icon-box">
              <span className="flaticon-app-development"></span>
            </div>
            <h2>
              Great things in business are never done by one person.{" "}
              <span>They’re done by a team of people.</span>
            </h2>
          </div>
        </div>
      </section>
      <section className="sponsors-section agency-section">
        <div className="sponsors-outer">
          <div className="auto-container">
            <div className="sponsors-carousel owl-theme owl-carousel">
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/1.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/2.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/3.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/4.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/5.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/1.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/2.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/3.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/4.png" alt="hh" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a>
                    <img src="/images/clients/5.png" alt="hh" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
