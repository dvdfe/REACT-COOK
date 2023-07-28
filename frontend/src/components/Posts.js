import React from "react";

const Posts = ({post}) => {
  
  return (
    <li className="post-card">
      <img src={post.image} alt={"Photo du plat " + post.image} />
      <div className="recipe-title">{post.plateName}</div>
      <div className="user">{post.author}</div>
      <p className="comment">{post.content}</p>
    </li>
  );
};

export default Posts;
