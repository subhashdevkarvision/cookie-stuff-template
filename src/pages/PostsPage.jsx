import React from "react";
import Postcard from "../components/postCard/Postcard";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import CartModal from "../components/navbar/CartModal";

const PostsPage = () => {
  const posts = useSelector((state) => state.product.postData);
  console.log(posts);
  return (
    <div>
      <div className="px-[4rem] md:px-[5.3rem]" style={{ margin: "10rem 0" }}>
        <h1 className="text-4xl mb-10" style={{ textAlign: "center" }}>
          All Posts (Blogs)
        </h1>
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
    </div>
  );
};

export default PostsPage;
