import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import CartModal from "../components/navbar/CartModal";
// import { useSelector } from "react-redux";

const SinglePostPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { id } = useParams();
  const location = useLocation();
  const { post } = location.state;

  const { theme, toggleTheme } = useContext(GlobalContext);
  // const postData = useSelector((state) => state.postData);
  // const post = postData.find((item) => item.id === parseInt(id));
  if (!post) {
    return <h1>No post available</h1>;
  }
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
      <div style={{ padding: "5rem" }} className="poppins-font">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h1 className="sm:text-4xl text-5xl">Post</h1>
          <div>
            <button
              style={{
                border: "none",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
              onClick={toggleTheme}
              className={
                theme === "light"
                  ? "bi bi-toggle-off text-5xl sm:text-2xl"
                  : "bi bi-toggle-on text-white text-5xl sm:text-2xl"
              }
            ></button>
          </div>
        </div>
        <img src={post.imgUrl} alt="" />
        <h1 className="sm:text-3xl text-5xl my-5">{post.title}</h1>
        <p className="sm:text-xl text-3xl">{post.time}</p>
        <p className="sm:text-2xl text-4xl my-2.5">{post.description}</p>
        <p className="sm:text-2xl text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p className="sm:text-2xl text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p className="sm:text-2xl text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p className="sm:text-2xl text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p className="sm:text-2xl text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePostPage;
