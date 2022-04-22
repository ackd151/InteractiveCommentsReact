import React, { useContext } from "react";
import UserCtx from "../../context/user-context";

import "./UserAvatar.css";

const UserAvatar = ({ user }) => {
  const userCtx = useContext(UserCtx);

  const userSelectHandler = (username) => {
    userCtx.setActiveUserCtx(username);
  };

  return (
    <img
      className={`avatar ${
        userCtx.activeUser.username === user.username ? "active" : ""
      }`}
      src={user.image}
      alt='comment author'
      onClick={() => userSelectHandler(user.username)}
    />
  );
};

export default UserAvatar;
