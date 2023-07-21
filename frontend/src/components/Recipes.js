import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
      <div>
      <ul>
        {data.map((recette, index) => (
          <Card key={index} recette={recette} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
