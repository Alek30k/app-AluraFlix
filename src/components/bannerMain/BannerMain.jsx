import React from "react";
import "./BannerMain.scss";

const BannerMain = () => {
  return (
    <div className="bannerMain">
      <div className="container">
        <div className="title">
          <h2>Challenge React</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            facere, recusandae veritatis, perspiciatis officia voluptatem
            architecto expedita ipsa mollitia quae maiores enim ab repellendus
            eos fugit modi fuga? Sequi, fugit.
          </p>
        </div>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ov7vA5HFe6w?si=TG-NnMLHNTBxQ6MW"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
