import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import BtnShare from '../BtnShare';
import BtnFavoritar from '../BtnFavoritar';
import BtnRecipeInfos from '../BtnRecipeInfos';
import fetchCustom from '../../services/FetchCustom';
import { recipeURL, recipes } from '../../utils';

const FavoriteRecipeInfos = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});

  useEffect(() => {
    const favorito = localStorage.getItem('favoriteRecipes');
    setFavoriteRecipes(JSON.parse(favorito));
  }, []);

  return favoriteRecipes && favoriteRecipes.map((item, index) => {
    const page = item.type === 'food' ? 'Foods' : 'Drinks';
    const url = `www.${recipeURL(page)}.com/api/json/v1/1/lookup.php?i=${item.id}`;

    fetchCustom(url).then((data) => { setCurrentRecipe(data?.[recipes(page)][0]); });

    return (
      <div key={ item.id }>
        {console.log(item)}
        <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ item.image }
          alt={ item.name }
          width="100"
        />
        <span data-testid={ `${index}-horizontal-top-text` }>
          {item.nationality}
        </span>
        <span data-testid={ `${index}-horizontal-top-text` }>{item.category}</span>
        <BtnRecipeInfos />
        <BtnFavoritar
          recipe={ currentRecipe }
          page={ page }
          testId={ `${index}-horizontal-favorite-btn` }
        />
        <BtnShare testId={ `${index}-horizontal-share-btn` } />
      </div>
    );
  });
};

FavoriteRecipeInfos.propTypes = {
  title: propTypes.string,
}.isRequired;

export default FavoriteRecipeInfos;
