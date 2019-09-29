import React, { useState } from 'react'

import Search from '../search/search';
import Recipe from '../recipe/recipe';

const Main = () => {
  const[recipes, setRecipes] = useState([]);

  const handleSearch = data => {
    setRecipes(data);
  };

  return(
    <React.Fragment>
      <Search onHandleSearch={handleSearch}/>
      {recipes.map((recipe, index) => (
        <Recipe id={index} data={recipe}/>
      ))}
    </React.Fragment>
  );
};

export default Main;
