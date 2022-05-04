import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import {
  verifyStarting, classDefiner, testIdDefiner, innerHTMLDefiner, recipeSelector,
} from '../../utils';

const SwitchButtons = ({ recipeId, ingredients, page }) => {
  const history = useHistory();
  const recipePage = page === 'Foods' ? 'foods' : 'drinks';

  const handleClick = () => {
    if (verifyStarting(page, recipeId)) {
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          [recipeSelector(page)]: {
            [recipeId]: {
              ingredients,
              id: recipeId,
            },
          },
        }),
      );
      history.push(`/${recipePage}/${recipeId}/in-progress`);
    }
  };

  return (
    <button
      className={ classDefiner(page, recipeId) }
      data-testid={ testIdDefiner(page, recipeId) }
      type="button"
      onClick={ handleClick }
    >
      { innerHTMLDefiner(page, recipeId) }
    </button>
  );
};

SwitchButtons.propTypes = {
  recipeId: PropTypes.string,
  page: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default SwitchButtons;
