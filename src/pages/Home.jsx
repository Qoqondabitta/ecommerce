import React from "react";
import Add from "../components/Announcement/Add";
import Navbar from "../components/navbar/Navbar";
import PostNavbar from "../components/postNavbar/PostNavbar";

const Home = () => {
  return (
    <div>
      <Add />
      <Navbar />
      <PostNavbar />
    </div>
  );
};

export default Home;
