import React from "react";

const Sidebar = () => {
  const latestPosts = [
    {
      image: "/images/resource/news-thumb-1.jpg",
      link: "#",
      title: "EXPERIENCES THAT CONNECT WITH PEOPLE",
    },
    {
      image: "/images/resource/news-thumb-2.jpg",
      link: "#",
      title: "WE BUILD AND ACTIVATE BRANDS INSIGHT",
    },
    {
      image: "/images/resource/news-thumb-3.jpg",
      link: "#",
      title: "A DEEP UNDERSTANDING OF OUR AUDIENCE",
    },
  ];

  const categories = [
    { name: "Business", link: "#" },
    { name: "Introductions", link: "#" },
    { name: "One Page Template", link: "#" },
    { name: "Parallax Effects", link: "#" },
    { name: "New Technologies", link: "#" },
    { name: "Video Backgrounds", link: "#" },
  ];

  const tags = [
    { name: "Business", link: "#" },
    { name: "Agency", link: "#" },
    { name: "Technology", link: "#" },
    { name: "Parallax", link: "#" },
    { name: "Innovative", link: "#" },
    { name: "Professional", link: "#" },
    { name: "Experience", link: "#" },
  ];

  return (
    <>
      <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
        <aside className="sidebar blog-sidebar">
          <div className="sidebar-widget recent-posts">
            <div className="widget-inner">
              <div className="sidebar-title">
                <h4>Latest Posts</h4>
              </div>

              {latestPosts.map((post) => (
                <div className="post" key={post.title}>
                  <figure className="post-thumb">
                    <img src={post.image} alt="blog-img" />
                  </figure>
                  <h5 className="text">
                    <a href={post.link}>{post.title}</a>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-widget archives">
            <div className="widget-inner">
              <div className="sidebar-title">
                <h4>Categories</h4>
              </div>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a href={cat.link}>{cat.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sidebar-widget popular-tags">
            <div className="widget-inner">
              <div className="sidebar-title">
                <h4>Tags</h4>
              </div>
              <div className="tags-list clearfix">
                {tags.map((tag) => (
                  <>
                    <a href={tag.link} key={tag.name}>
                      {tag.name}
                    </a>
                    ,
                  </>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
