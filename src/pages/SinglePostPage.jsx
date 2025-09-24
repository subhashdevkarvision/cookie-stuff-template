import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router";
import { GlobalContext } from "../GlobalContext/GlobalContext";
// import { useSelector } from "react-redux";

const SinglePostPage = () => {
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
      <Navbar />
      <div style={{ padding: "5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h1>Post</h1>
          <div>
            <button
              style={{
                border: "none",
                padding: "0.5rem",
                borderRadius: "50%",
                fontSize: "1.5rem",
              }}
              onClick={toggleTheme}
              className={
                theme === "light" ? "bi bi-toggle-off" : "bi bi-toggle-on"
              }
            ></button>
          </div>
        </div>
        <img src={post.imgUrl} alt="" />
        <h1>{post.title}</h1>
        <p>{post.time}</p>
        <p>{post.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni
          vero cum suscipit eligendi corrupti animi quos voluptas nihil dolore
          nesciunt nemo sequi quibusdam eaque facere obcaecati quaerat quod
          placeat fuga, aperiam nulla iure voluptate porro repudiandae! Odio,
          veritatis. Fugit.
        </p>
        <p>
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
