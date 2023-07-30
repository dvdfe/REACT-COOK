import React from "react";

const dateFormater = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return newDate;
};

const Posts = ({ post }) => {
  return (
    <li className="post-card">
      <img src={post.image} alt={"Photo du plat " + post.image} />
      <div className="recipe-title">
        {post.plateName}
        <em>Ajouté le {dateFormater(post.date)}</em>
      </div>
      <div className="user">{post.author}</div>
      <p className="comment">{post.content}</p>
      <div className="btn-card">
      <button>Modifier</button>
      <button>Supprimer</button>
      </div>
    </li>
  );
};

export default Posts;
