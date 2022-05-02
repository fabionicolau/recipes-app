import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';

const RecipeCards = ({ page, isRecomendation }) => {
  const { data, redirect, setRedirect } = useContext(MyContext);

  useEffect(() => () => {
    setRedirect(false);
  }, [setRedirect]);

  const recipes = page === 'Foods' ? data.meals : data.drinks;
  const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
  const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
  const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
  const pageStr = page === 'Foods' ? 'foods' : 'drinks';
  const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
  const DataIdType = isRecomendation ? 'recomendation' : 'recipe';

  if (recipes === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  const six = 6;
  const twelve = 12;
  const maxCards = isRecomendation ? six : twelve;

  if (recipes && recipes.length === 1 && redirect === true) {
    return <Redirect to={ `/${pageStr}/${recipes[0][recipeId]}` } />;
  }

  return (
    <div>
      {recipes && recipes.length >= 1
        && recipes.slice(0, maxCards).map((recipe, index) => (
          <Link
            key={ recipe[recipeId] }
            to={ `/${pageStr}/${recipe[recipeId]}` }
          >
            <div data-testid={ `${index}-${DataIdType}-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[recipeImage] }
                alt={ recipe[recipeName] }
              />
              <p data-testid={ `${index}-card-name` }>{recipe[recipeName]}</p>
              {isRecomendation && (
                <p data-testid="recipe-category">{recipe[recipeCategory]}</p>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

RecipeCards.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeCards;
