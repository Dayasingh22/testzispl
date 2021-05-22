import React from "react";

const Footer = () => {
  return (
    <>
      <section className="call-to-section">
        <div className="auto-container">
          <div className="inner clearfix">
            <div
              className="shape-1 wow slideInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            ></div>
            <div
              className="shape-2 wow fadeInDown"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            ></div>
            <h2>
              Let's Get Your Project <br />
              Started!
            </h2>
            <div className="link-box">
              <a className="theme-btn btn-style-two" href="/contact">
                <i className="btn-curve"></i>
                <span className="btn-title">Contact with us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget logo-widget">
                  <div className="widget-content">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          id="fLogo"
                          src="/images/logo.png"
                          alt="logo"
                          style={{ height: "54px" }}
                        />
                      </a>
                    </div>
                    <div className="text">
                      We strive to excel and help unlock your potential. We
                      innovate and have the competency, attitude and mindset to
                      deliver.
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#">
                          <span className="fab fa-facebook-square"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-twitter"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-instagram"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fab fa-pinterest-p"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget links-widget">
                  <div className="widget-content">
                    <h6>Explore</h6>
                    <div className="row clearfix">
                      <div className="col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Meet Our Team</a>
                          </li>
                          <li>
                            <a href="#">Our Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Latest News</a>
                          </li>
                          <li>
                            <a href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <ul>
                          <li>
                            <a href="#">Support</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Terms of Use</a>
                          </li>
                          <li>
                            <a href="#">Help</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget info-widget">
                  <div className="widget-content">
                    <h6>Contact</h6>
                    <ul className="contact-info">
                      <li className="address">
                        <span className="icon flaticon-pin-1"></span> 66 Broklyn
                        Street, New York <br />
                        United States of America
                      </li>
                      <li>
                        <span className="icon flaticon-call"></span>
                        <a href="tel:666888000">666 888 000</a>
                      </li>
                      <li>
                        <span className="icon flaticon-email-2"></span>
                        <a href="mailto:contact-us@zispl.com">
                          contact-us@zispl.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer-widget newsletter-widget">
                  <div className="widget-content">
                    <h6>Newsletter</h6>
                    <div className="newsletter-form">
                      <form
                        method="post"
                        action="http://layerdrops.com/linoorhtml/contact.html"
                      >
                        <div className="form-group clearfix">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <button type="submit" className="theme-btn">
                            <span className="fa fa-envelope"></span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="text">
                      Sign up for our latest news & articles. We won’t give you
                      spam mails.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner clearfix">
              <div className="copyright">&copy; copyright 2021 ZISBV</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
