import React from "react";

const Client = () => {
  const clients = [
    { image: "/images/clients/1.png", id: "1" },
    { image: "/images/clients/2.png", id: "2" },
    { image: "/images/clients/3.png", id: "3" },
    { image: "/images/clients/4.png", id: "4" },
    { image: "/images/clients/5.png", id: "5" },
    { image: "/images/clients/1.png", id: "6" },
    { image: "/images/clients/2.png", id: "7" },
    { image: "/images/clients/3.png", id: "8" },
    { image: "/images/clients/4.png", id: "9" },
    { image: "/images/clients/5.png", id: "10" },
  ];

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
              {clients.map((client) => (
                <div className="slide-item" key={client.id}>
                  <figure className="image-box">
                    <a>
                      <img src={client.image} alt="hh" />
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
