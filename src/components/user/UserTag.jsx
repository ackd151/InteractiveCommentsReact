import React, { useContext } from "react";

import UserCtx from "../../context/user-context";
import UserAvatar from "./UserAvatar";
import "./UserTag.css";

const UserTag = ({ user }) => {
  const userCtx = useContext(UserCtx);

  return (
    <div className='user-tag'>
      <UserAvatar user={user} />
      <span className='user-name'>{user.username}</span>
      {userCtx.activeUser.username === user.username && (
        <div className='you'>you</div>
      )}
    </div>
  );
};

export default UserTag;
