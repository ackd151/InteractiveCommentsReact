import React, { useContext, useState } from "react";

import CommentCtx from "../../context/comment-context";
import UserCtx from "../../context/user-context";
import { getParentComment } from "../../utils/get-parent";
import "./CommentInput.css";

const CommentInput = ({
  comment,
  type,
  parents,
  idx,
  onReply,
  editing,
  onEdited,
}) => {
  const userCtx = useContext(UserCtx);
  const commentCtx = useContext(CommentCtx);

  const buttonTxt =
    type === "reply" ? "reply" : type === "update" ? "update" : "send";
  const startingContent = comment
    ? comment.content
    : `Add a ${type === "reply" ? "response" : "comment"}...`;

  const onSubmitHandler = () => {
    const newComment = {
      id: commentCtx.genId(),
      content: content,
      createdAt: "Just now",
      score: 0,
      user: userCtx.activeUser,
      replies: [],
    };
    onReply();
    setContent(startingContent);
    commentCtx.addComment(newComment, parents);
  };

  const onEditSubmitHandler = () => {
    const editedComment = { ...comment };
    editedComment.content = content;
    onEdited();
    commentCtx.editComment(editedComment, parents, idx);
  };

  const [content, setContent] = useState(startingContent);

  const contentFocus = (ev) => {
    if (type !== "update") {
      // get parent comment for '@parent-author '
      let parent;
      if (parents && parents.length > 0) {
        parent = getParentComment(commentCtx.thread, parents);
      }
      setContent(parent ? `@${parent.user.username} ` : "");
    }
    // Set caret position
    ev.target.setSelectionRange(content.length, content.length);
  };

  const contentChange = (ev) => {
    setContent(ev.target.value);
  };

  return (
    <div className={`comment-input-block ${type === "update" && "editing"}`}>
      <textarea
        autoFocus={editing}
        name='comment-content'
        id='comment-content'
        className='comment-input-content'
        value={content}
        onFocus={contentFocus}
        onChange={contentChange}
        cols='30'
        rows='3'
      >
        {content}
      </textarea>
      <button
        type='button'
        className='comment-submit-btn'
        onClick={editing ? onEditSubmitHandler : onSubmitHandler}
      >
        {buttonTxt}
      </button>
    </div>
  );
};

export default CommentInput;
