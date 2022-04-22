import React, { useContext } from "react";
import UserCtx from "../../context/user-context";
import UserAvatar from "../user/UserAvatar";
import CommentInput from "./CommentInput";
import "./NewComment.css";

const NewComment = ({ type, parents, onReply, editing }) => {
  const userCtx = useContext(UserCtx);

  return (
    <div className='new-comment-block comment'>
      <span className='avatar'>
        <UserAvatar user={userCtx.activeUser} />
      </span>
      <CommentInput
        type={type}
        parents={parents}
        onReply={onReply}
        editing={editing}
      />
    </div>
  );
};

export default NewComment;
