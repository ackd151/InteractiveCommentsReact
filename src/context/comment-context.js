import React from "react";

const CommentCtx = React.createContext({
  thread: {},
  genId: () => {},
  addComment: () => {},
  editComment: () => {},
  deleteComment: () => {},
});

export default CommentCtx;
