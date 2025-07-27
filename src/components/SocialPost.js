import React from 'react';
import Comment from './Comment';
import '../styles/SocialPost.css';

const SocialPost = ({ post, onCommentClick }) => {
  return (
    <div className="social-post">
      <div className="post-header">
        <span className="post-user-name">{post.user.name}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-comments">
        {post.comments.map(comment => (
          <Comment 
            key={comment.id} 
            comment={comment} 
            onCommentClick={onCommentClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default SocialPost; 