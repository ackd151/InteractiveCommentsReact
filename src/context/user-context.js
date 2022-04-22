import React from "react";

const UserCtx = React.createContext({
  users: [],
  activeUser: {},
  setActiveUser: () => {},
});

export default UserCtx;
