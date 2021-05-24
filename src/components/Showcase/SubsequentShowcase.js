import React from "react";

const SubsequentShowcase = ({ page = "Home" }) => {
  return (
    <>
      <section className="page-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(/images/background/image-7.jpg)" }}
        ></div>
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="banner-inner">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <h1>{page}</h1>
              <div className="page-nav">
                <ul className="bread-crumb clearfix">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">{page}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubsequentShowcase;
