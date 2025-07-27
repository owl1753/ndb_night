import React from 'react';
import '../styles/Comment.css';

const Comment = ({ comment, onCommentClick }) => {
  const handleClick = () => {
    onCommentClick(comment);
  };

  return (
    <div className="comment" onClick={handleClick}>
      <span className="comment-user">{comment.user}</span>
      <span className="comment-text">{comment.text}</span>
    </div>
  );
};

export default Comment; 