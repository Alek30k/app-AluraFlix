import { useEffect, useState } from "react";
import BannerMain from "../../components/bannerMain/BannerMain";
import Carousel from "../../components/carousel/Carousel";
// import data from "../../data/datos-iniciales.json";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ categorys }) => {
  return (
    <div className="home">
      {categorys.length === 0 ? (
        <div className="loading">
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
          <div className="obj" />
        </div>
      ) : (
        <>
          <div className="banner">
            <BannerMain />
          </div>
          {categorys.map((cat) => (
            <div className="slider_home" key={cat.id}>
              <div className="category_slider">
                <h1
                  className="title_category"
                  style={{ backgroundColor: cat.cor }}
                >
                  {cat.title}
                </h1>

                <Link to={`${cat?.link_extra?.url}`}>
                  <p className="textDesc">{cat?.link_extra?.text}</p>
                </Link>
              </div>

              <Carousel cat={cat} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
