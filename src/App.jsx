import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Video from "./pages/video/Video";
import axios from "axios";

function App() {
  const [categorys, setCategorys] = useState([]);

  console.log(categorys);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "https://appflix.onrender.com/api/category/search"
        );

        setCategorys(res.data);
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
          element: <Video categorys={categorys} />,
        },
        {
          path: "/register",
          element: <Register categorys={categorys} />,
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
