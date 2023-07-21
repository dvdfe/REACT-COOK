import React from 'react';
import Header from "./components/Header"
import Recipes from './components/Recipes';
import Search from './components/Search';

const App = () => {
  return (
    <div>
      <Header/> 
      <Search/>
      <Recipes/>
    </div>
  );
};

export default App;
