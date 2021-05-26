import React from "react";

const Blog = () => {
  const blogs = [
    {
      date: "20 Mar",
      author: "Admin",
      link: "#",
      delay: "0ms",
      image: "/images/resource/news-7.jpg",
      title: "basic rules of running web agency business",
      description: `Lorem ipsum is simply free text used by copytyping
                    refreshing.`,
    },
    {
      date: "25 Mar",
      author: "Admin",
      link: "#",
      delay: "300ms",
      image: "/images/resource/news-8.jpg",
      title: "Delivering the best digital marketing",
      description: `Lorem ipsum is simply free text used by copytyping
                    refreshing.`,
    },
    {
      date: "28 Mar",
      author: "Admin",
      link: "#",
      delay: "600ms",
      image: "/images/resource/news-9.jpg",
      title: "Introducing the latest learning features",
      description: `Lorem ipsum is simply free text used by copytyping
                    refreshing.`,
    },
  ];

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
            {blogs.map((blog) => (
              <div
                className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={blog.delay}
                data-wow-duration="1500ms"
                key={blog.title}
              >
                <div className="inner-box">
                  <div className="image-box">
                    <a href={blog.link}>
                      <img src={blog.image} alt="dd" />
                    </a>
                  </div>
                  <div className="lower-box">
                    <div className="post-meta">
                      <ul className="clearfix">
                        <li>
                          <span className="far fa-clock"></span> {blog.date}
                        </li>
                        <li>
                          <span className="far fa-user-circle"></span>{" "}
                          {blog.author}
                        </li>
                      </ul>
                    </div>
                    <h5>
                      <a href={blog.link}>{blog.title}</a>
                    </h5>
                    <div className="text">{blog.description}</div>
                    <div className="link-box">
                      <a className="theme-btn" href={blog.link}>
                        <span className="flaticon-next-1"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
