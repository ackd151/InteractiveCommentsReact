import React, { useState } from "react";
import UserCtx from "./context/user-context";
import CommentCtx from "./context/comment-context";
import DeleteModal from "./components/layout/DeleteModal";
import Header from "./components/layout/Header";
import CommentThread from "./components/comment/CommentThread";
import Footer from "./components/layout/Footer";

import { getParentRef } from "./utils/get-parent";
// import static/fake data
import { staticData, users } from "./data";

function App() {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [data, setData] = useState(staticData.comments);
  const [idGen, setIdGen] = useState(5);
  const defaultAlertState = {
    vis: false,
    parents: null,
    idx: null,
  };
  const [alert, setAlert] = useState(defaultAlertState);

  const setActiveUserCtx = (username) => {
    for (let user of users) {
      if (user.username === username) {
        setActiveUser(user);
      }
    }
  };

  const generateId = () => {
    setIdGen((prevId) => prevId + 1);
    return idGen;
  };

  const addNewCommentHandler = (comment, parents) => {
    setData((prevState) => {
      const newState = [...prevState];
      const parentPtr = getParentRef(newState, parents);
      parentPtr.push(comment);
      return newState;
    });
  };

  const editCommentHandler = (comment, parents, idx) => {
    setData((prevState) => {
      const newState = [...prevState];
      const parentPtr = getParentRef(newState, parents);
      parentPtr[idx] = comment;
      return newState;
    });
  };

  const deleteAlertAction = (parents, idx) => {
    setAlert({
      vis: true,
      parents: parents,
      idx: idx,
    });
  };
  const deleteConfirm = () => {
    deleteCommentHandler(alert.parents, alert.idx);
    setAlert(defaultAlertState);
  };
  const deleteCancel = () => {
    setAlert(defaultAlertState);
  };

  const deleteCommentHandler = (parents, deleteIdx) => {
    setData((prevState) => {
      const newState = [...prevState];
      let parentPtr = getParentRef(newState, parents);
      parentPtr.splice(deleteIdx, 1);
      return newState;
    });
  };

  return (
    <CommentCtx.Provider
      value={{
        thread: data,
        genId: generateId,
        addComment: addNewCommentHandler,
        editComment: editCommentHandler,
        deleteComment: deleteAlertAction,
      }}
    >
      <UserCtx.Provider value={{ users, activeUser, setActiveUserCtx }}>
        {alert.vis && (
          <DeleteModal onConfirm={deleteConfirm} onCancel={deleteCancel} />
        )}
        <Header />
        <CommentThread comments={data} />
        <Footer />
      </UserCtx.Provider>
    </CommentCtx.Provider>
  );
}

export default App;
