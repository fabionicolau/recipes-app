import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import { DataIdRecomendation, DataIdType } from '../../utils/index';
import * as S from './style';

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
    <S.StyledDiv>
      <div className={ isRecomendation ? ('carousel') : ('contentBox') }>
        {recipes && recipes.length >= 1
        && recipes.slice(0, maxCards).map((recipe, index) => (
          <Link
            key={ recipe[recipeId] }
            to={ `/${pageStr}/${recipe[recipeId]}` }
            style={ { textDecoration: 'none' } }
          >
            <S.StyledCardBox
              data-testid={ `${index}-${DataIdType(isRecomendation)}-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ recipe[recipeImage] }
                alt={ recipe[recipeName] }
              />
              <p
                data-testid={ `${index}${DataIdRecomendation(isRecomendation)}` }
              >
                {recipe[recipeName]}
              </p>

              {isRecomendation && (
                <p data-testid="recipe-category">{recipe[recipeCategory]}</p>
              )}
            </S.StyledCardBox>
          </Link>
        ))}
      </div>
    </S.StyledDiv>
  );
};

RecipeCards.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeCards;
