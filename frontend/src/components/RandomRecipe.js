import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import axios from "axios";
import Card from "./Card";

const getRandomRecipe = () => {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.data.meals);
};

const RandomRecipe = () => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    getRandomRecipe().then((randomData) => setData(randomData || []));
  };

  return (
    <div>
      <Header />
      <Navigation />
      <h2>Découvre une recette !</h2>
      <div className="btn-random-recipe-container">
        <button className="btn-random-recipe" onClick={handleClick}>
          Je me lance
        </button>
      </div>
      <ul>
        {data &&
          data.map((recette, index) => <Card key={index} recette={recette} />)}
      </ul>
    </div>
  );
};

export default RandomRecipe;
