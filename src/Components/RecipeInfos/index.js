import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import fetchCustom from '../../services/FetchCustom';
import BtnFavoritar from '../BtnFavoritar';
import MyContext from '../../Context/MyContext';
import RecipeCards from '../RecipeCards';
import SwitchButtons from '../SwitchButtons';
import BtnShare from '../BtnShare';

const RecipeInfos = ({ page, recomendation }) => {
  const { id } = useParams();
  const { setData } = useContext(MyContext);
  const [recipeDetails, setRecipeDetails] = useState();

  const recipes = page === 'Foods' ? 'meals' : 'drinks';
  const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
  const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
  const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
  const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
  const recipeURL = page === 'Foods' ? 'themealdb' : 'thecocktaildb';
  const recipeVideo = page === 'Foods' ? 'strYoutube' : 'strVideo';
  const recomendationURL = page === 'Foods' ? 'thecocktaildb' : 'themealdb';

  useEffect(() => {
    fetchCustom(`https://www.${recipeURL}.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((datas) => setRecipeDetails(datas));
    fetchCustom(`https://www.${recomendationURL}.com/api/json/v1/1/search.php?s=`)
      .then((datas) => setData(datas));
  }, [id, recipeURL, setData, recomendationURL]);

  const youtubeId = recipeDetails?.[recipes][0][recipeVideo]?.split('=');

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

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails?.[recipes][0][recipeImage] }
        alt={ recipeDetails?.[recipes][0][recipeName] }
        width="350"
      />
      <BtnShare />
      <BtnFavoritar
        recipe={ recipeDetails?.[recipes][0] }
        page={ page }
      />
      <h2 data-testid="recipe-title">{ recipeDetails?.[recipes][0][recipeName] }</h2>
      <p data-testid="recipe-category">{ recipeDetails?.[recipes][0][recipeCategory]}</p>
      {ingredients?.length > 0 && ingredients.map((ingredient, index) => (
        <p
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ ingredient }
        >
          {`${ingredient} - ${measures[index]}`}

        </p>
      ))}
      <p data-testid="instructions">{ recipeDetails?.[recipes][0].strInstructions}</p>
      { recipeDetails?.[recipes][0][recipeVideo] && (<embed
        data-testid="video"
        src={ `https://www.youtube.com/embed/${youtubeId && youtubeId[1]}` }
        allowFullScreen={ false }
        width="350"
        height="344"
      />) }
      <RecipeCards page={ recomendation } isRecomendation />
      <SwitchButtons
        page={ page }
        recipeId={ recipeDetails?.[recipes][0][recipeId] }
        ingredients={ ingredients }
      />
    </div>
  );
};

RecipeInfos.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeInfos;
