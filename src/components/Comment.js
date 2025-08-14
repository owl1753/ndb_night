import React from "react";
import "../styles/Comment.css";

const Comment = ({ comment, onCommentClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // comment 객체가 유효한 경우에만 실행
    if (comment && comment.id) {
      onCommentClick(comment);
    }
  };

  return (
    <div className="comment" onClick={handleClick}>
      <span className="comment-user">{comment.user}</span>
      <span className="comment-text">{comment.text}</span>
    </div>
  );
};

export default Comment;
