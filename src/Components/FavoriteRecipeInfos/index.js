import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import MyContext from '../../Context/MyContext';
import FavoriteCar from './style';

const copy = require('clipboard-copy');

const FavoriteRecipeInfos = () => {
  const { favoriteRecipes, setFavoriteRecipes } = useContext(MyContext);
  const [isCopied, setIsCopied] = useState(false);

  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const favorito = localStorage.getItem('favoriteRecipes');
    setFavoriteRecipes(JSON.parse(favorito));
  }, [setFavoriteRecipes]);

  const handleFavoriteClick = (id) => {
    setFavoriteRecipes((prevState) => {
      const newState = [...prevState];
      const index = newState.findIndex((recipe) => recipe.id === id);
      newState.splice(index, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newState));
      return newState;
    });
  };

  return favoriteRecipes && favoriteRecipes.map((item, index) => {
    const page = item.type === 'food' ? 'Foods' : 'Drinks';

    return (

      <FavoriteCar key={ item.id }>
        <div>
          <Link to={ `/${page.toLowerCase()}/${item.id}` }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
              alt={ item.name }
              width="100"
            />
            <section>
              <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
              {
                page === 'Foods'
                  ? (
                    <span data-testid={ `${index}-horizontal-top-text` }>
                      {`${item.nationality} - ${item.category}`}
                    </span>
                  )
                  : (
                    <span data-testid={ `${index}-horizontal-top-text` }>
                      {`${item.alcoholicOrNot}`}
                    </span>
                  )
              }
            </section>
          </Link>
        </div>

        <section>
          <div>

            <button
              data-testid={ `${index}-horizontal-favorite-btn` }
              type="button"
              id={ item.id }
              onClick={ ({ target: { id } }) => handleFavoriteClick(id) }
              src={ blackHeartIcon }
            >
              <img
                src={ blackHeartIcon }
                alt="Favorite icon"
              />
            </button>
            {
              isCopied ? (<span>Link copied!</span>) : (
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                  src={ shareIcon }
                  onClick={ () => {
                    copy(window.location.href
                      .replace('/favorite-recipes', `/${page.toLowerCase()}/${item.id}`));
                    setIsCopied(true);
                  } }
                >
                  <img src={ shareIcon } alt="Share icon" />
                </button>)
            }
          </div>
        </section>
      </FavoriteCar>
    );
  });
};

FavoriteRecipeInfos.propTypes = {
  title: propTypes.string,
}.isRequired;

export default FavoriteRecipeInfos;
