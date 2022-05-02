import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';

const IngredientsCards = ({ endpoint, page }) => {
  const { ingredients, setIngredients } = useContext(MyContext);
  const pageStr = page === 'Foods' ? 'foods' : 'drinks';
  const recipeType = page === 'Foods' ? 'meals' : 'drinks';
  const ingredientsType = page === 'Foods' ? 'strIngredient' : 'strIngredient1';

  const imgUrl = page === 'Foods'
    ? 'https://www.themealdb.com/images/ingredients/'
    : 'https://www.thecocktaildb.com/images/ingredients/';
  useEffect(() => {
    const maxCards = 12;

    fetchCustom(endpoint)
      .then((data) => setIngredients(data[recipeType].slice(0, maxCards)));
  }, [setIngredients, endpoint, recipeType]);

  return (
    <div>
      {ingredients && ingredients.length >= 1
        && ingredients.map((recipe, index) => (
          <Link key={ recipe[ingredientsType] } to={ `/${pageStr}` }>
            <div data-testid={ `${index}-ingredient-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ `${imgUrl}${recipe[ingredientsType]}-Small.png` }
                alt={ recipe[ingredientsType] }
              />
              <p data-testid={ `${index}-card-name` }>{recipe[ingredientsType]}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

IngredientsCards.propTypes = {
  endpoint: propTypes.string,
  page: propTypes.string,
}.isRequired;

export default IngredientsCards;