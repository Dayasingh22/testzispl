import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubsequentShowcase from "../components/Showcase/SubsequentShowcase";
import useScript from "../useScript";
import BlogSidebar from "../components/BlogSidebar";
import ScrollToTop from "../components/ScrollToTop";

const Blog = () => {
  useScript("/js/appear.js");
  useScript("/js/wow.js");
  useScript("/js/jarallax.min.js");
  useScript("/js/custom-script.js");

  const blogs = [
    {
      date: "20 Mar",
      author: "Admin",
      link: "#",
      image: "/images/resource/news-7.jpg",
      title: "basic rules of running web agency business",
      description: `There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum.`,
    },
    {
      date: "25 Mar",
      author: "Admin",
      link: "#",
      image: "/images/resource/news-8.jpg",
      title: "Delivering the best digital marketing",
      description: `There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum.`,
    },
    {
      date: "28 Mar",
      author: "Admin",
      link: "#",
      image: "/images/resource/news-9.jpg",
      title: "Introducing the latest learning features",
      description: `There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum.`,
    },
  ];

  return (
    <>
      <Header />
      <SubsequentShowcase page="Blog" />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-posts">
                {blogs.map((blog) => (
                  <div className="news-block-two" key={blog.title}>
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
                        <h4>
                          <a href={blog.link}>{blog.title}</a>
                        </h4>
                        <div className="text">{blog.description}</div>
                        <div className="link-box">
                          <a className="theme-btn" href={blog.link}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Blog;
