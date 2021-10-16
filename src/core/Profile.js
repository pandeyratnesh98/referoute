import "../styles/profile.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import { data } from "../util";
import Form from "../Components/Form";
import Input from "../Components/Input";
import { Fragment } from "react";
const Profile = () => {
  const [user, setUser] = useState(data.currentUser);
  const [alertsucc, setAlert] = useState("");
  const handlePictureSelected = (e) => {
    var picture = e.target.files[0];
    var src = URL.createObjectURL(picture);
    data.currentUser = { ...data.currentUser, pictureSrc: src };
    console.log(data);
    setUser({ ...user, pictureSrc: src });
  };
  function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlongvalue =
      position.coords.latitude + "," + position.coords.longitude;
    var img_url =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      latlongvalue +
      "&markers=color:red%7C" +
      latitude +
      "," +
      longitude +
      "&amp;zoom=14&amp;size=400x300&amp;key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";
    document.getElementById("mapholder").innerHTML =
      "<img src='" + img_url + "'>";
  }
  function errorHandler(err) {
    if (err.code == 1) {
      alert("Error: Access is denied!");
    } else if (err.code == 2) {
      alert("Error: Position is unavailable!");
    }
  }
  function getLocation() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      var options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        showLocation,
        errorHandler,
        options
      );
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  }
  const updateChanges = () => {
    data.currentUser = { ...user };
    setAlert("User Data Updated Successfully");
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <div className="col-lg-6">
          <div className="picture-container">
            <div className="picture">
              <img
                src={user.pictureSrc}
                className="picture-src"
                id="wizardPicturePreview"
                title=""
              />
              <input
                type="file"
                id="wizard-picture"
                class=""
                onChange={handlePictureSelected.bind(this)}
              />
            </div>
            <h6 className="">Choose Picture</h6>
          </div>
          <div
            id="mapholder"
            style={{ width: 500, height: 500, margin: "45px auto" }}></div>
        </div>
        <div className="col-lg-6">
          <div className="card" style={{ marginTop: 40, textAlign: "center" }}>
            <div className="card-body">
              <h1 className="align-center">User Profile</h1>
              <Form
                enabled={true}
                btnText="SAVE CHANGES"
                callback={(e) => {
                  e.preventDefault();
                  updateChanges();
                }}>
                <Input>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </Input>
                <Input>
                  <span className="input-group-text">+91</span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={user.contact}
                    onChange={(e) =>
                      setUser({ ...user, contact: e.target.value })
                    }
                  />
                </Input>
                <Input>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </Input>
              </Form>
            </div>
            {
              /* Alert here */
              alertsucc && <span style={{ color: "green" }}>{alertsucc} </span>
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
