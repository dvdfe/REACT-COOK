import React from 'react';
import Recipes from './components/Recipes';
import MyRecipes from "./components/MyRecipes"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Recipes/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/my-recipes" element={<MyRecipes/>}/>
      <Route path="*" element={<Recipes/>}/>
    </Routes>
    </BrowserRouter>
    // <div>
    //   <Header/> 
    //   <Navigation/>
    //   <Recipes/>
    // </div>
  );
};

export default App;
