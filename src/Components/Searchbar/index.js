import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';
// import ingredient from '../../services/Ingredient';

const Searchbar = ({ page }) => {
  const { setData } = useContext(MyContext);
  const [searchInputs, setSearchInputs] = useState({
    radio: '',
    text: '',
  });
  const handleChange = ({ target: { value, type } }) => {
    setSearchInputs({
      ...searchInputs,
      [type]: value,
    });
  };

  const fetchData = async ({ radio, text }) => {
    setData([]);
    const firstLetter = 'First Letter';
    if (radio === firstLetter && text.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      let endPoint;
      if (page === 'Foods') {
        endPoint = 'https://www.themealdb.com/api/json/v1/1/';
      }
      if (page === 'Drinks') {
        endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/';
      }
      if (radio === 'Ingredient') {
        endPoint += `filter.php?i=${text}`;
      }
      if (radio === 'Name') {
        endPoint += `search.php?s=${text}`;
      }
      if (radio === firstLetter) {
        endPoint += `search.php?f=${text}`;
      }
      setData(await fetchCustom(endPoint));
    }
  };

  return (
    <div>
      <input
        value={ searchInputs.text }
        data-testid="search-input"
        type="text"
        name="search"
        onChange={ handleChange }
      />
      <input
        name="search-radio"
        type="radio"
        data-testid="ingredient-search-radio"
        value="Ingredient"
        onChange={ handleChange }
      />
      Ingredient
      <input
        name="search-radio"
        type="radio"
        data-testid="name-search-radio"
        value="Name"
        onChange={ handleChange }
      />
      Name
      <input
        name="search-radio"
        type="radio"
        data-testid="first-letter-search-radio"
        value="First Letter"
        onChange={ handleChange }
      />
      First Letter
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => fetchData(searchInputs) }
      >
        Search
      </button>
    </div>
  );
};

Searchbar.propTypes = {
  page: propTypes.string,
}.isRequired;

export default Searchbar;
