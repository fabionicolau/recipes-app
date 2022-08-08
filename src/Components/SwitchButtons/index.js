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
  recipeSelector,
  verifyDone,
} from '../../utils';

const SwitchButtons = ({ recipeId, ingredients, page }) => {
  const history = useHistory();
  const [buttonInfo, setButtonInfo] = useState({
    class: '',
    testId: '',
    innerHTML: '',
    isDone: false,
  });

  // didMount
  useEffect(() => {
    const defineButtonInfo = () => {
      const classDefinerResult = classDefiner(page, recipeId);
      const testIdDefinerResult = testIdDefiner(page, recipeId);
      const innerHTMLDefinerResult = innerHTMLDefiner(page, recipeId);
      const verifyHaveDone = verifyDone(recipeId);
      setButtonInfo({
        class: classDefinerResult,
        testId: testIdDefinerResult,
        innerHTML: innerHTMLDefinerResult,
        isDone: verifyHaveDone,
      });
    };
    defineButtonInfo();
  }, [recipeId, page]);

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
    <div>
      { !buttonInfo.isDone && (
        <button
          className={ buttonInfo.class }
          data-testid={ buttonInfo.testId }
          type="button"
          onClick={ handleClick }
        >
          { buttonInfo.innerHTML }
        </button>
      )}
    </div>
  );
};

SwitchButtons.propTypes = {
  recipeId: PropTypes.string,
  page: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default SwitchButtons;
