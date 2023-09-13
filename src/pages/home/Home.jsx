import { useEffect, useState } from "react";
import BannerMain from "../../components/bannerMain/BannerMain";
import Carousel from "../../components/carousel/Carousel";
// import data from "../../data/datos-iniciales.json";
import "./Home.scss";
import axios from "axios";

const Home = () => {
  // const sliders = data.categorias;
  const [category, setCategory] = useState([]);
  // console.log(category);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/category/search"
        );

        setCategory(res.data);

        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <BannerMain />
      </div>
      {category.length === 0 && <div className="loading">Loading....</div>}
      {category.map((cat) => (
        <div className="slider_home" key={cat.id}>
          <div className="category_slider">
            <h1 className="title_category" style={{ backgroundColor: cat.cor }}>
              {cat.title}
            </h1>
            <p>{cat?.link_extra?.text}</p>
          </div>

          <Carousel cat={cat} />
        </div>
      ))}
    </div>
  );
};

export default Home;
