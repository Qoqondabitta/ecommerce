import React from "react";
import Add from "../components/Announcement/Add";
import Navbar from "../components/navbar/Navbar";
import PostNavbar from "../components/postNavbar/PostNavbar";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Add />
      <Navbar />
      <PostNavbar />
      <Slider />
    </div>
  );
};

export default Home;
