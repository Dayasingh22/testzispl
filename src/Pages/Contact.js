/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubsequentShowcase from "../components/Showcase/SubsequentShowcase";
import useScript from "../useScript";

const Contact = () => {
  useScript("/js/appear.js");
  useScript("/js/wow.js");
  useScript("/js/jarallax.min.js");
  useScript("/js/custom-script.js");
  return (
    <>
      <Header />
      <SubsequentShowcase page="Contact" />
      <section className="contact-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              Our Offices<span className="dot">.</span>
            </h2>
          </div>

          <div className="upper-info">
            <div className="row clearfix">
              <div
                className="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <h5>Austin</h5>
                  <div className="text">
                    <ul className="info">
                      <li>22 Texas West Hills</li>
                      <li>
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <h5>Boston</h5>
                  <div className="text">
                    <ul className="info">
                      <li>5 Federal Street Boston</li>
                      <li>
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <h5>New york</h5>
                  <div className="text">
                    <ul className="info">
                      <li>8th Broklyn New York</li>
                      <li>
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="info-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay="900ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <h5>baltimore</h5>
                  <div className="text">
                    <ul className="info">
                      <li>3 Lombabr 50 Baltimore</li>
                      <li>
                        <a href="mailto:needhelp@linoor.com">
                          needhelp@linoor.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="map-box">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230899.1642407818!2d145.06327708904033!3d-37.792102974783376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65cd0db468a97%3A0xb61fde84306fc38a!2sMelbourne%20Zoo!5e0!3m2!1sen!2s!4v1592307685926!5m2!1sen!2s"
              style={{ border: "none" }}
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="form-box">
            <div className="sec-title">
              <h2>
                Write Us a Message<span className="dot">.</span>
              </h2>
            </div>
            <div className="default-form">
              <form
                method="post"
                action="http://layerdrops.com/linoorhtml/sendemail.php"
                id="contact-form"
              >
                <div className="row clearfix">
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                      <input
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="field-inner">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button className="theme-btn btn-style-one">
                      <i className="btn-curve"></i>
                      <span className="btn-title">Send message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Contact;
