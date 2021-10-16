import React from "react";
import { useState } from "react/cjs/react.development";
import { Fragment } from "react/cjs/react.production.min";
import Form from "../Components/Form";
import Input from "../Components/Input";
import Navbar from "../Components/NavBar";
import Posts from "../Components/Posts";
import { data } from "../util";

const Home = (props) => {
  const INITIAL_STATE = {
    text: "",
    title: "",
    time: "",
    name: "",
    count: 0,
    likedbyme: false,
    key: Math.random() * 1000000,
  };
  const user = data.currentUser;
  const [post, setPost] = useState(INITIAL_STATE);
  const [posts, setPosts] = useState(data.post);
  const [alertsucc, setAlert] = useState("");
  const handleSubmit = (post) => {
    if (post.text.length === 0) {
      return alert("You Cannot Post Empty description First Write Something");
    }
    if (post.title.length === 0) {
      return alert("You Cannot Post Empty title First Write Something");
    }
    const datenow = new Date();
    if (datenow) {
      setPost({
        ...post,
        time: new Date(),
        name: user.name,
      });
      setPosts([...posts, post]);
      data.post.push(post);
      console.log(data);
      setAlert("Post Posted");
      setPost(INITIAL_STATE);
      setAlert("");
    }
  };
  return (
    <div className="main">
      <Navbar className="navbar-main" />
      <div className="container">
        <div
          className="card"
          style={{ marginTop: 40, textAlign: "center", maxWidth: 600 }}>
          <div className="card-body">
            <Form
              enabled={true}
              btnText="Post"
              callback={(e) => {
                e.preventDefault();
                handleSubmit(post);
              }}>
              <Input>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </Input>
              <Input>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write Something"
                  value={post.text}
                  onChange={(e) =>
                    setPost({ ...post, text: e.target.value })
                  }></textarea>
              </Input>
            </Form>
          </div>
          {alertsucc && <span style={{ color: "green" }}>{alertsucc}</span>}
        </div>
      </div>
      <Posts posts={posts} />
    </div>
  );
};
export default Home;
