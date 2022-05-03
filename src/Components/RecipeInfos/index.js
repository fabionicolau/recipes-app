import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import fetchCustom from '../../services/FetchCustom';
import shareIcon from '../../images/shareIcon.svg';
import MyContext from '../../Context/MyContext';
import RecipeCards from '../RecipeCards';

const copy = require('clipboard-copy');

const RecipeInfos = ({ page, recomendation }) => {
  const { id } = useParams();
  const { data, setData } = useContext(MyContext);
  const [recipeDetails, setRecipeDetails] = useState();
  const [isCopied, setIsCopied] = useState(false);

  const recipes = page === 'Foods' ? 'meals' : 'drinks';
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

  console.log(data);

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
              copy(window.location.href);
              setIsCopied(true);
            } }
          >
            <img src={ shareIcon } alt="Share icon" />
          </button>
        )}
      <button data-testid="favorite-btn" type="button">
        Favorite
      </button>
      <h2 data-testid="recipe-title">{ recipeDetails?.[recipes][0][recipeName] }</h2>
      <p data-testid="recipe-category">{ recipeDetails?.[recipes][0][recipeCategory]}</p>
      <p data-testid="instructions">{ recipeDetails?.[recipes][0].strInstructions}</p>
      { recipeDetails?.[recipes][0][recipeVideo] && (<embed
        data-testid="video"
        src={ `https://www.youtube.com/embed/${youtubeId && youtubeId[1]}` }
        allowFullScreen={ false }
        width="350"
        height="344"
      />) }
      <RecipeCards page={ recomendation } isRecomendation />
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
    </div>
  );
};

RecipeInfos.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeInfos;
