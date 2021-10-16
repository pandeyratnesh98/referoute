import "../styles/signIn.css";
import React, { useState } from "react";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { data } from "../util";

const SignUp = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    contact: "",
    username: "",
    password: "",
    confpass: "",
  });

  const createUser = (currentUser) => {
    if (!currentUser.name) {
      return alert("Name Cannot be empty");
    }
    if (!currentUser.contact) {
      return alert("Phone Number Cannot be empty");
    }
    if (currentUser.contact.length > 10 || currentUser.contact.length < 10) {
      return alert("Phone Number must be 10 digits long");
    }
    if (!currentUser.username) {
      return alert("UserName Cannot be empty");
    }
    if (!currentUser.password) {
      return alert("Password Cannot be empty");
    }
    if (!currentUser.confpass) {
      return alert("Confirm Password Cannot be empty");
    }

    if (currentUser.password !== currentUser.confpass) {
      return alert("Both Password Not Matching");
    }
    const found = data.users.find((element) => element.username);
    if (!found) {
      data.users.push(currentUser);
      console.log("successfully Sign Up");
      console.log(data.users);
      props.history.push("/signin");
    } else {
      alert("UserID Already exist Please Sign In");
      props.history.push("/signin");
    }
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        <Logo />
      </div>

      <div
        className="col-lg-6"
        style={{ display: "flex", alignItems: "center" }}>
        <div className="card">
          <div className="card-body">
            <h1 className="align-center">Sign Up</h1>
            <Form
              enabled={true}
              btnText="SIGN UP"
              callback={(e) => {
                e.preventDefault();
                createUser(currentUser);
              }}>
              <Input>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={currentUser.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </Input>
              <Input>
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={currentUser.contact}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, contact: e.target.value })
                  }
                />
              </Input>
              <Input>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={currentUser.username}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, username: e.target.value })
                  }
                />
              </Input>
              <Input>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={currentUser.password}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, password: e.target.value })
                  }
                />
              </Input>
              <Input>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={currentUser.confpass}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, confpass: e.target.value })
                  }
                />
              </Input>
            </Form>
            <hr className="solid1" />
            <Input>
              <Link
                to="/signin"
                className="btn btn-success btn-lg form-controll"
                style={{ width: "100%", backgroundColor: "#81a7ff" }}>
                ALREADY MEMBER?
              </Link>
            </Input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
