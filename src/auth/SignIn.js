import "../styles/signIn.css";
import React, { useState } from "react";
import Logo from "../Components/Logo";
import Input from "../Components/Input";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { data } from "../util";

const SignIn = (props) => {
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = (cred) => {
    if (!cred.username) {
      return alert("UserName Cannot be empty");
    }
    if (!cred.password) {
      return alert("UserName Cannot be empty");
    }

    const found = data.users.find((element) => element.username);
    if (!found) {
      alert("UserID not Exist Please Create new one");
    } else {
      if (found.password === cred.password) {
        console.log("Sign In Successfull");
        data.currentUser = found;
        console.log(data);
        props.history.push("/");
      } else {
        alert("Password Mismatch");
        setCred({ ...cred, password: "" });
      }
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
            <h1 className="align-center">Sign In</h1>
            <Form
              enabled={true}
              btnText="SIGN IN"
              callback={(e) => {
                e.preventDefault();
                handleSignIn(cred);
              }}>
              <Input>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={cred.username}
                  onChange={(e) =>
                    setCred({ ...cred, username: e.target.value })
                  }
                />
              </Input>
              <Input>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={cred.password}
                  onChange={(e) =>
                    setCred({ ...cred, password: e.target.value })
                  }
                />
              </Input>
            </Form>
            <hr className="solid1" />
            <Link
              to="/signup"
              className="btn btn-success btn-lg form-controll"
              style={{ width: "100%" }}>
              CREATE NEW ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
