import React from "react";
import Postcard from "../components/PostCard/Postcard";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const PostsPage = () => {
  const posts = useSelector((state) => state.postData);
  return (
    <div>
      <Navbar />
      <div style={{ margin: "10rem 0" }}>
        <h1 style={{ textAlign: "center" }}>All Posts (Blogs)</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {posts.length > 0 &&
            posts.map((item, index) => <Postcard key={index} post={item} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostsPage;
