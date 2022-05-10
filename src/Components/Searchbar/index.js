import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';
import * as S from './style';

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
      <S.StyledInput>
        <input
          value={ searchInputs.text }
          data-testid="search-input"
          type="text"
          name="search"
          onChange={ handleChange }
        />
      </S.StyledInput>
      <S.StyledSearchbar>
        <label htmlFor="Ingredient">
          <input
            id="Ingredient"
            name="search-radio"
            type="radio"
            data-testid="ingredient-search-radio"
            value="Ingredient"
            onChange={ handleChange }
          />
          Ingredient
        </label>
        <label htmlFor="Name">
          <input
            id="Name"
            name="search-radio"
            type="radio"
            data-testid="name-search-radio"
            value="Name"
            onChange={ handleChange }
          />
          Name
        </label>
        <label htmlFor="First Letter">
          <input
            id="First Letter"
            name="search-radio"
            type="radio"
            data-testid="first-letter-search-radio"
            value="First Letter"
            onChange={ handleChange }
          />
          First Letter
        </label>

        <button
          style={ { height: '19px', fontSize: '15px', alignItems: 'center' } }
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => fetchData(searchInputs) }
        >
          Search
        </button>
      </S.StyledSearchbar>
    </div>
  );
};

Searchbar.propTypes = {
  endpoint: propTypes.string,
}.isRequired;

export default Searchbar;
