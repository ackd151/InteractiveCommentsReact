import React, { useContext } from "react";

import CommentCtx from "../../context/comment-context";
import "./CommentEdits.css";

const CommentEdits = ({ parents, idx, onEditClick }) => {
  const commentCtx = useContext(CommentCtx);

  return (
    <div className='comment-edits'>
      <button
        type='button'
        className='edit-btn delete'
        onClick={() => commentCtx.deleteComment(parents, idx)}
      >
        <img src='./images/icon-delete.svg' alt='delete comment' />
        delete
      </button>
      <button type='button' className='edit-btn edit' onClick={onEditClick}>
        <img src='./images/icon-edit.svg' alt='edit comment' />
        edit
      </button>
    </div>
  );
};

export default CommentEdits;
