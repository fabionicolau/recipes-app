import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';
import BtnFavoritar from '../BtnFavoritar';
import BtnShare from '../BtnShare';
import {
  recipeSelector,
  recipes,
  idRecipe,
  recipeArea,
  recipeName,
  recipeImage,
  recipeCategory,
  recipeURL,
  recipeAlcohol,
  recipeType,
  getCurrentDate,
} from '../../utils';
import './style.css';

const RecipeInProgressInfos = ({ page }) => {
  const { setDoneRecipes } = useContext(MyContext);
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState();
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  const history = useHistory();
  // didMount
  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes) {
      setCheckedIngredients(inProgressRecipes[recipeSelector(page)][id]
        ?.ingredientsWithBoxes);
      if (Object
        .values(inProgressRecipes[recipeSelector(page)][id]
          .ingredientsWithBoxes)
        .every((data) => data === true)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [page, id]);

  useEffect(() => {
    fetchCustom(`https://www.${recipeURL(page)}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((datas) => {
        const initialData = Object.entries(datas[recipes(page)][0]);
        const filterData = (strKey) => initialData.filter((element) => element[0]
          .includes(strKey) && element[1] && element[1] !== ' ')
          .map((element) => element[1]);
        const filteredIngredients = filterData('strIngredient');
        const filteredMeasures = filterData('strMeasure');
        setIngredients(filteredIngredients);
        setMeasures(filteredMeasures);
        let newCheckedIngredients = filteredIngredients.reduce((acc, curr) => {
          acc[curr] = false;
          return acc;
        }, {});
        const previousStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const previousData = Object.entries(previousStorage[recipeSelector(page)][id]
          .ingredientsWithBoxes);
        if (previousData.some((data) => data[1] === true)) {
          previousData.forEach((data) => {
            newCheckedIngredients = { ...newCheckedIngredients, [data[0]]: data[1] };
          });
        }
        setCheckedIngredients(newCheckedIngredients);
        setRecipeDetails(datas);
      });
  }, [id, page]);

  // didUpdate
  useEffect(() => {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      [recipeSelector(page)]: {
        [id]: {
          ingredientsWithBoxes: checkedIngredients,
        },
      },
    }));
    if (Object
      .values(checkedIngredients)
      .every((data) => data === true)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [checkedIngredients, id, page]);

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

  const handleClick = () => {
    const recipeInfo = recipeDetails[recipes(page)][0];
    const newDone = {
      id: recipeInfo[idRecipe(page)],
      type: recipeType(page),
      nationality: recipeInfo[recipeArea(page)],
      category: recipeInfo[recipeCategory(page)],
      alcoholicOrNot: recipeInfo[recipeAlcohol(page)],
      name: recipeInfo[recipeName(page)],
      image: recipeInfo[recipeImage(page)],
      doneDate: getCurrentDate(),
      tags: recipeInfo.strTags,
    };
    const doneData = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneData && doneData.every((data) => data.id !== newDone.id)) {
      localStorage.setItem('doneRecipes', JSON.stringify([...doneData, newDone]));
      setDoneRecipes([...doneData, newDone]);
    } else if (!doneData) {
      localStorage.setItem('doneRecipes', JSON.stringify([newDone]));
      setDoneRecipes([newDone]);
    }
    history.push('/done-recipes');
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails?.[recipes(page)][0][recipeImage(page)] }
        alt={ recipeDetails?.[recipes(page)][0][recipeName(page)] }
        width="350"
      />
      <BtnShare />
      <BtnFavoritar
        recipe={ recipeDetails?.[recipes(page)][0] }
        page={ page }
      />
      <h2
        data-testid="recipe-title"
      >
        { recipeDetails?.[recipes(page)][0][recipeName(page)] }

      </h2>
      <p
        data-testid="recipe-category"
      >
        { recipeDetails?.[recipes(page)][0][recipeCategory(page)]}

      </p>

      {ingredients?.length > 0 && ingredients.map((ingredient, index) => (
        <p
          data-testid={ `${index}-ingredient-step` }
          key={ ingredient }
        >
          <label htmlFor={ ingredient }>
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

      <p
        data-testid="instructions"
      >
        { recipeDetails?.[recipes(page)][0].strInstructions}

      </p>
      <button
        data-testid="finish-recipe-btn"
        className="in-progress"
        type="button"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        Finish Recipe
      </button>
    </div>
  );
};

RecipeInProgressInfos.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeInProgressInfos;
