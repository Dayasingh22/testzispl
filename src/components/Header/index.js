import React from "react";

const Header = () => {
  return (
    <>
      <header className="main-header header-style-one">
        <div className="header-upper">
          <div className="inner-container clearfix">
            <div className="logo-box">
              <div className="logo">
                <a href="/" title="ZISBV">
                  <img
                    src="/images/logo.png"
                    id="thm-logo"
                    alt="ZISBV"
                    title="ZISBV"
                  />
                </a>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="dropdown">
                      <a>Learning Solutions</a>
                      <ul>
                        <li>
                          <a href="/">Content Development</a>
                        </li>
                        <li>
                          <a href="/">Localization</a>
                        </li>
                        <li>
                          <a href="/">E-learning</a>
                        </li>
                        <li>
                          <a href="/">Engagement Model</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/worksamples">Work Samples</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="other-links clearfix">
              <div className="link-box">
                <div className="call-us">
                  <a className="link" href="tel:6668880000">
                    <span className="icon"></span>
                    <span className="sub-text">Call Anytime</span>
                    <span className="number">666 888 0000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="side-menu__block">
        <div className="side-menu__block-overlay custom-cursor__overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner ">
          <div className="side-menu__top justify-content-end">
            <a href="#" className="side-menu__toggler side-menu__close-btn">
              <img src="images/icons/close-1-1.png" alt="close" />
            </a>
          </div>

          <nav className="mobile-nav__container"></nav>
          <div className="side-menu__sep"></div>
          <div className="side-menu__content">
            <p>
              WELCOME TO ZISPL <br /> We strive to excel and help unlock your
              potential. We innovate and have the competency, attitude and
              mindset to deliver
            </p>
            <p>
              <a href="mailto:contact-us@zispl.com">contact-us@zispl.com</a>{" "}
              <br /> <a href="tel:888-999-0000">888 999 0000</a>
            </p>
            <div className="side-menu__social">
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
