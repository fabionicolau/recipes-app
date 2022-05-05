import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import fetchCustom from '../../services/FetchCustom';
import shareIcon from '../../images/shareIcon.svg';
import BtnFavoritar from '../BtnFavoritar';
import MyContext from '../../Context/MyContext';
import SwitchButtons from '../SwitchButtons';
import { recipeSelector } from '../../utils';

const copy = require('clipboard-copy');

const RecipeInProgressInfos = ({ page }) => {
  const { id } = useParams();
  const { setData } = useContext(MyContext);
  const [recipeDetails, setRecipeDetails] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const recipes = page === 'Foods' ? 'meals' : 'drinks';
  const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
  const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
  const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
  const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
  const recipeURL = page === 'Foods' ? 'themealdb' : 'thecocktaildb';

  // didMount
  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes) {
      setCheckedIngredients(inProgressRecipes[recipeSelector(page)][id]
        .ingredientsWithBoxes);
    }
  }, [page, id]);

  useEffect(() => {
    fetchCustom(`https://www.${recipeURL}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((datas) => setRecipeDetails(datas));
  }, [id, recipeURL, setData]);

  // didUpdate
  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      [recipeSelector(page)]: {
        [id]: {
          ingredientsWithBoxes: checkedIngredients,
        },
      },
    }));
  }, [checkedIngredients, id, page]);

  const filterIngredients = (param) => {
    if (recipeDetails?.[recipes][0]) {
      const ingredients = Object.entries(recipeDetails[recipes][0]);
      const filteredIngredients = ingredients
        .filter((element) => element[0]
          .includes(param) && element[1] && element[1] !== ' ')
        .map((element) => element[1]);
      return filteredIngredients;
    }
  };
  const ingredients = filterIngredients('strIngredient');
  const measures = filterIngredients('strMeasure');

  const handleChange = (ingredient) => {
    setCheckedIngredients({
      ...checkedIngredients,
      [ingredient]: !checkedIngredients[ingredient],
    });
  };

  const verifyChecked = (ingredient) => {
    if (checkedIngredients[ingredient]) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails?.[recipes][0][recipeImage] }
        alt={ recipeDetails?.[recipes][0][recipeName] }
        width="350"
      />
      {isCopied
        ? 'Link copied!'
        : (
          <button
            data-testid="share-btn"
            type="button"
            onClick={ () => {
              copy(window.location.href.replace('/in-progress', ''));
              setIsCopied(true);
            } }
          >
            <img src={ shareIcon } alt="Share icon" />
          </button>
        )}
      <BtnFavoritar
        recipe={ recipeDetails?.[recipes][0] }
        page={ page }
      />
      <h2 data-testid="recipe-title">{ recipeDetails?.[recipes][0][recipeName] }</h2>
      <p data-testid="recipe-category">{ recipeDetails?.[recipes][0][recipeCategory]}</p>

      {ingredients?.length > 0 && ingredients.map((ingredient, index) => (
        <p
          data-testid={ `${index}-ingredient-step` }
          key={ ingredient }
        >
          <label htmlFor={ `ingredient-step-${index}` }>
            <input
              type="checkbox"
              id={ ingredient }
              onChange={ ({ target }) => handleChange(target.id) }
              checked={ verifyChecked(ingredient) }
            />
            {`${ingredient} - ${measures[index]}`}
          </label>

        </p>
      ))}

      <p data-testid="instructions">{ recipeDetails?.[recipes][0].strInstructions}</p>
      <SwitchButtons
        page={ page }
        recipeId={ recipeDetails?.[recipes][0][recipeId] }
        ingredients={ ingredients }
        inProgress
      />
    </div>
  );
};

RecipeInProgressInfos.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeInProgressInfos;
