import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, remove } from "../../redux/userSlice";

export default function Update() {
  const [userData, setUserData] = useState({
    name: "",
    email: ""
  });


  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(update(userData));
  }

  const removeAccount = () => {
    console.log("remove");
    dispatch(remove())
  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={removeAccount}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              type="button"
              className="updateButton"
              onClick={onUpdate}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
