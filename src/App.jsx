import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Video from "./pages/video/Video";
import axios from "axios";

function App() {
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

  const Layout = () => {
    return (
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addvideo",
          element: <Video category={category} setCategory={setCategory} />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
