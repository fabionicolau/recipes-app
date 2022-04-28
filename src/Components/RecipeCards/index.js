import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';

const RecipeCards = ({ page }) => {
  const { data, redirect, setRedirect } = useContext(MyContext);

  useEffect(() => () => {
    setRedirect(false);
  }, [setRedirect]);

  if (data.drinks === null || data.meals === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  const maxCards = 12;

  if (page === 'Foods') {
    if (data.meals && data.meals.length === 1 && redirect === true) {
      return <Redirect to={ `/foods/${data.meals[0].idMeal}` } />;
    }

    return (
      <div>
        {data.meals && data.meals.length >= 1
          && data.meals.slice(0, maxCards).map((recipes, index) => (
            <Link key={ recipes.idMeal } to={ `/foods/${recipes.idMeal}` }>
              <div data-testid={ `${index}-recipe-card` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipes.strMealThumb }
                  alt={ recipes.strMeal }
                />
                <p data-testid={ `${index}-card-name` }>{recipes.strMeal}</p>
              </div>
            </Link>
          ))}
      </div>
    );
  }
  if (page === 'Drinks') {
    if (data.drinks && data.drinks.length === 1) {
      return <Redirect to={ `/drinks/${data.drinks[0].idDrink}` } />;
    }

    return (
      <div>
        {data.drinks && data.drinks.length > 1
        && data.drinks.slice(0, maxCards).map((recipes, index) => (
          <Link key={ recipes.idDrink } to={ `/drinks/${recipes.idDrink}` }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ recipes.strDrinkThumb }
                alt={ recipes.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>{recipes.strDrink}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

RecipeCards.propTypes = {
  page: propTypes.string,
}.isRequired;

export default RecipeCards;
