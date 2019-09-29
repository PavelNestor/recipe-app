import React, { useEffect, useState } from 'react';

import './search.css';

const Search = ({onHandleSearch}) => {
  const APP_ID = 'cce92af3';
  const APP_KEY = '50888b5fe2dfe1c665b5f96e7bff2e61';

  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responce.json();
    onHandleSearch(data.hits);
  };

  const handleSearch = e => {
    const value = e.target.value;

    setSearch(value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <React.Fragment>
      <form className='search__form' onSubmit={getSearch}>
        <input className='search__input' type='text' value={search} onChange={handleSearch}/>
        <button className='search__btn' onClick={getRecipes}>Search</button>
    </form>
    </React.Fragment>
  );
};

export default Search;
