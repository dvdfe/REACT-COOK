import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setData(res.data.meals));
  }, [inputSearch]);

  return (
    <div>
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Tapez le nom d'un aliment (en anglais)..."
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <ul>
        {data && data.map((recette, index) => (
          <Card key={index} recette={recette} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
