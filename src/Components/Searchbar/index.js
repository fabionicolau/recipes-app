import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';

const Searchbar = ({ endpoint }) => {
  const { setData, setRedirect } = useContext(MyContext);
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
      let endpointRoot = endpoint;
      if (radio === 'Ingredient') {
        endpointRoot += `filter.php?i=${text}`;
      }
      if (radio === 'Name') {
        endpointRoot += `search.php?s=${text}`;
      }
      if (radio === firstLetter) {
        endpointRoot += `search.php?f=${text}`;
      }
      setRedirect(true);
      setData(await fetchCustom(endpointRoot));
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
  endpoint: propTypes.string,
}.isRequired;

export default Searchbar;
