import React, { useContext, useState } from "react";

import ScoreWidget from "./ScoreWidget";
import UserTag from "../user/UserTag";
import CommentInput from "./CommentInput";
import NewComment from "./NewComment";
import CommentEdits from "./CommentEdits";
import UserCtx from "../../context/user-context";
import "./Comment.css";

const Comment = ({ comment, parents, idx }) => {
  const userCtx = useContext(UserCtx);

  const [replyVis, setReplyVis] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const replyClickHandler = () => {
    setReplyVis((prevState) => !prevState);
  };

  const editModeHandler = () => {
    setEditMode((prevState) => !prevState);
  };

  return (
    <div className={`comment-block ${parents.length > 0 ? "is-reply" : ""}`}>
      <div className='comment'>
        <ScoreWidget score={comment.score} />
        <div className='comment-content'>
          <div className='comment-content_head'>
            <div className='user-meta'>
              <UserTag user={comment.user} />
              <span className='posted'>{comment.createdAt}</span>
            </div>
            {comment.user.username === userCtx.activeUser.username ? (
              <CommentEdits
                comment={comment}
                parents={parents}
                idx={idx}
                onEditClick={editModeHandler}
              />
            ) : (
              <div className='reply' onClick={replyClickHandler}>
                <span className='reply-svg'>
                  <img src='/images/icon-reply.svg' alt='reply' />
                </span>
                <span>reply</span>
              </div>
            )}
          </div>
          <div className='comment-content_body'>
            {editMode ? (
              <CommentInput
                comment={comment}
                editing={editMode}
                onEdited={() => setEditMode(false)}
                type='update'
                parents={parents}
                idx={idx}
              ></CommentInput>
            ) : (
              <p>{comment.content}</p>
            )}
          </div>
        </div>
      </div>
      {replyVis && (
        <NewComment
          type={"reply"}
          editing={false}
          parents={[...parents, idx]}
          onReply={() => setReplyVis(false)}
        />
      )}
      {comment.replies.length > 0 && (
        <div className='reply-block'>
          <div className='reply-line-tab'>
            <span className='reply-line'></span>
          </div>
          <div className='replies'>
            {comment.replies.map((reply, rIdx) => (
              <Comment
                key={reply.id}
                comment={reply}
                parents={[...parents, idx]}
                idx={rIdx}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
