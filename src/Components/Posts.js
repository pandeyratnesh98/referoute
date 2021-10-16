import "../styles/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
import { data } from "../util";
const Posts = ({ posts }) => {
  const [like, setlike] = useState([]);
  const [postsstate, setPost] = useState(data.post);

  const mapPosts = posts.map((post, index) => {
    const m = new Date(post.time);
    var dateString =
      m.getUTCFullYear() +
      "/" +
      ("0" + (m.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + m.getDate()).slice(-2) +
      " " +
      ("0" + m.getHours()).slice(-2) +
      ":" +
      ("0" + m.getMinutes()).slice(-2);
    const handleClick = (index) => {
      if (post.likedbyme === true) {
        setPost([
          ...postsstate,
          (post.count = post.count - 1),
          (post.likedbyme = false),
        ]);
      } else {
        setPost([
          ...postsstate,
          (post.count = post.count + 1),
          (post.likedbyme = true),
        ]);
      }
    };
    return (
      <div className="card" style={{ maxWidth: 600 }}>
        <div className="card-body">
          <div
            className="card-title"
            style={{ color: "green", fontSize: 20, textAlign: "center" }}>
            {post.name}
          </div>
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.text}</p>
          <div className="card-footer">
            <FontAwesomeIcon
              className="icon"
              icon={faHeart}
              style={{
                width: 35,
                height: 35,
                color: `${post.likedbyme ? "red" : "gray"}`,
              }}
              onClick={() => handleClick(index)}
            />
            <span style={{ marginLeft: 15 }}>{post.count}</span>
            <span style={{ marginLeft: "auto" }}>{dateString}</span>
          </div>
        </div>
      </div>
    );
  });
  return <Fragment>{mapPosts}</Fragment>;
};

export default Posts;
