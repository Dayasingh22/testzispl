import React from "react";

const Blog = () => {
  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              Latest news & articles<span className="dot">.</span>
            </h2>
          </div>

          <div className="row clearfix">
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="images/resource/news-1.jpg" alt="dd" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li>
                        <span className="far fa-clock"></span> 20 Mar
                      </li>
                      <li>
                        <span className="far fa-user-circle"></span> Admin
                      </li>
                      <li>
                        <span className="far fa-comments"></span> 2 Comments
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a href="blog-single.html">
                      basic rules of running web agency business
                    </a>
                  </h5>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="/images/resource/news-2.jpg" alt="kk" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li>
                        <span className="far fa-clock"></span> 20 Mar
                      </li>
                      <li>
                        <span className="far fa-user-circle"></span> Admin
                      </li>
                      <li>
                        <span className="far fa-comments"></span> 2 Comments
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a href="blog-single.html">
                      Delivering the best digital marketing
                    </a>
                  </h5>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <a href="blog-single.html">
                    <img src="/images/resource/news-3.jpg" alt="kk" />
                  </a>
                </div>
                <div className="lower-box">
                  <div className="post-meta">
                    <ul className="clearfix">
                      <li>
                        <span className="far fa-clock"></span> 20 Mar
                      </li>
                      <li>
                        <span className="far fa-user-circle"></span> Admin
                      </li>
                      <li>
                        <span className="far fa-comments"></span> 2 Comments
                      </li>
                    </ul>
                  </div>
                  <h5>
                    <a href="blog-single.html">
                      Introducing the latest linoor features
                    </a>
                  </h5>
                  <div className="text">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing.
                  </div>
                  <div className="link-box">
                    <a className="theme-btn" href="blog-single.html">
                      <span className="flaticon-next-1"></span>
                    </a>
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

export default Blog;
