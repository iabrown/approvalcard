import React from 'react';
import Avatar from 'react-avatar';



const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <Avatar  name="Wim Mostmans" />
      </a>
      <div className="content">
        <a href="/" className="author">{props.avatar}</a>
        <div className="metadata">
          <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text">{props.commentData}</div>
      </div>
    </div>

  );
};

export default CommentDetail;
