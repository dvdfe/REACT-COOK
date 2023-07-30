import React from "react";
import axios from "axios";

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

  const handleDelete = () => {
    axios.delete("http://localhost:3004/comments/" + post.id);
  };

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
        <button onClick={() => handleDelete()}>Supprimer</button>
      </div>
    </li>
  );
};

export default Posts;
