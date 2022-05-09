import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { verifyFavorite } from '../../utils';

const BtnFavoritar = ({ recipe, page }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [heartColor, setHeartColor] = useState(`${whiteHeartIcon}`);
  const [favoriteObject, setFavoriteObject] = useState({
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  });

  // componentDidMount()
  useEffect(() => {
    const favorite = verifyFavorite(favoriteObject?.id);
    if (!favorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteObject.id]);

  useEffect(() => {
    const defineFavorite = () => {
      if (recipe && page === 'Foods') {
        const {
          idMeal: id,
          strArea: nationality,
          strCategory: category,
          strMeal: name,
          strMealThumb: image,
        } = recipe;
        const type = 'food';
        const alcoholicOrNot = '';
        setFavoriteObject({
          id, type, nationality, category, alcoholicOrNot, name, image });
      } else if (recipe) {
        const {
          idDrink: id,
          strAlcoholic: alcoholicOrNot,
          strCategory: category,
          strDrink: name,
          strDrinkThumb: image,
        } = recipe;
        const nationality = '';
        const type = 'drink';
        setFavoriteObject({
          id, type, nationality, category, alcoholicOrNot, name, image });
      }
    };
    defineFavorite();
  }, [page, recipe]);

  // componentDidupdate
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const previousData = data ? [...data] : [];
    const newFavorite = favoriteObject ? { ...favoriteObject } : {};
    if (isFavorite) {
      setHeartColor(whiteHeartIcon);
      const filterFavorite = () => {
        localStorage.removeItem('favoriteRecipes');
        const newFilter = data.filter((item) => item.id !== favoriteObject?.id);
        localStorage.setItem('favoriteRecipes', JSON.stringify(newFilter));
      };
      filterFavorite();
    } else {
      setHeartColor(blackHeartIcon);
      localStorage
        .setItem('favoriteRecipes', JSON
          .stringify([...previousData, newFavorite]));
    }
  }, [isFavorite, favoriteObject]);

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
  recipe: PropTypes.shape({}),
  page: PropTypes.string,
}.isRequired;

export default BtnFavoritar;
