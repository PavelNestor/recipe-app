import React from 'react'

const Recipe = ({data}) => {

  return(
    <div>
      <h3>{data.recipe.label}</h3>
      <p>{data.recipe.calories}</p>
      <img src={data.recipe.image} alt={data.recipe.label}/>
    </div>
  );
};

export default Recipe;
