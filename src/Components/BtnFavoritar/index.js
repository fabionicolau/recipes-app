import React, { useEffect, useState } from 'react';
import './checkbox.css';
import { string } from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { verifyFavorite } from '../../utils';
// import { verifyFavorite } from '../../utils';

const BtnFavoritar = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [heartColor, setHeartColor] = useState(`${whiteHeartIcon}`);

  // const favorite = verifyFavorite(recipe);
  // componentDidupdate
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(data);
    const teste = data ? [...data] : [];
    if (isFavorite) {
      setHeartColor(whiteHeartIcon);
      const filterFavorite = () => {
        localStorage.removeItem('favoriteRecipes');
        const newFilter = data.filter((item) => item.id !== recipe);
        localStorage.setItem('favoriteRecipes', JSON.stringify(newFilter));
      };
      filterFavorite();
    } else {
      setHeartColor(blackHeartIcon);
      localStorage
        .setItem('favoriteRecipes', JSON
          .stringify([...teste, {
            id: recipe,
            type: 'recipe',
            nationality: '',
            category: 'Cocktail',
            alcoholicOrNot: 'Alcoholic',
            name: 'Aquamarine',
            image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
          }]));
    }
  }, [isFavorite, recipe]);

  // componentDidMount()
  useEffect(() => {
    const favorite = verifyFavorite(recipe);
    if (!favorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [recipe]);

  return (

    <div>
      <button
        data-testid="favorite-btn"
        type="button"
        onClick={ () => setIsFavorite(!isFavorite) }
        src={ heartColor }
      >
        <img
          src={ heartColor }
          alt="Favorite icon"
        />
      </button>
    </div>
  );
};

BtnFavoritar.propTypes = {
  recipe: string,
}.isRequired;

export default BtnFavoritar;
