import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import fetchCustom from '../../services/FetchCustom';

const SurpriseButton = ({ endpoint, page }) => {
  const history = useHistory();
  const recipes = page === 'Foods' ? 'meals' : 'drinks';
  const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
  const pageStr = page === 'Foods' ? 'foods' : 'drinks';
  return (
    <button
      type="button"
      data-testid="explore-surprise"
      onClick={ async () => {
        await fetchCustom(endpoint)
          .then((randomRecipes) => history
            .push(`/${pageStr}/${randomRecipes[recipes][0][recipeId]}`));
      } }
    >
      Surprise me!
    </button>
  );
};

SurpriseButton.propTypes = {
  endpoint: propTypes.string,
  page: propTypes.string,
}.isRequired;

export default SurpriseButton;
