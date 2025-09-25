import React, { useState } from "react";
import Postcard from "../components/PostCard/Postcard";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import CartModal from "../components/navbar/CartModal";

const PostsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const posts = useSelector((state) => state.postData);
  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
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
      <Footer />
    </div>
  );
};

export default PostsPage;
