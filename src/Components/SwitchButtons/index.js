import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import {
  verifyStarting,
  verifyInProgress,
  classDefiner,
  testIdDefiner,
  innerHTMLDefiner,
  disabledDefiner,
  recipeSelector,
} from '../../utils';

const SwitchButtons = ({ recipeId, ingredients, page, inProgress }) => {
  const history = useHistory();
  const [buttonInfo, setButtonInfo] = useState({
    class: '',
    testId: '',
    innerHTML: '',
    disabled: false,
  });

  // didMount
  useEffect(() => {
    const defineButtonInfo = () => {
      const classDefinerResult = classDefiner(page, recipeId, inProgress);
      const testIdDefinerResult = testIdDefiner(page, recipeId, inProgress);
      const innerHTMLDefinerResult = innerHTMLDefiner(page, recipeId, inProgress);
      const disabledDefinerResult = disabledDefiner(inProgress);
      setButtonInfo({
        class: classDefinerResult,
        testId: testIdDefinerResult,
        innerHTML: innerHTMLDefinerResult,
        disabled: disabledDefinerResult,
      });
    };
    defineButtonInfo();
  }, [recipeId, page, inProgress]);

  const recipePage = page === 'Foods' ? 'foods' : 'drinks';

  const handleClick = () => {
    if (verifyStarting(page, recipeId)) {
      let ingredientsWithBoxes = {};
      ingredients.forEach((ingredient) => {
        ingredientsWithBoxes = { ...ingredientsWithBoxes, [ingredient]: false };
      });
      localStorage.setItem(
        'inProgressRecipes',
        JSON.stringify({
          [recipeSelector(page)]: {
            [recipeId]: {
              ingredientsWithBoxes,
              id: recipeId,
            },
          },
        }),
      );
      history.push(`/${recipePage}/${recipeId}/in-progress`);
    }
    if (verifyInProgress(page, recipeId)) {
      history.push(`/${recipePage}/${recipeId}/in-progress`);
    }
  };

  return (
    <button
      className={ buttonInfo.class }
      data-testid={ buttonInfo.testId }
      type="button"
      onClick={ handleClick }
      disabled={ buttonInfo.disabled }
    >
      { buttonInfo.innerHTML }
    </button>
  );
};

SwitchButtons.propTypes = {
  recipeId: PropTypes.string,
  page: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default SwitchButtons;
