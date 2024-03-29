import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import StyledDiv from './style';

const BtnRecipeInfos = () => {
  const { setFavoriteRecipes } = useContext(MyContext);
  return (
    <StyledDiv>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => {
          const favorito = JSON.parse(localStorage.getItem('favoriteRecipes'));
          setFavoriteRecipes(favorito);
        } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          const favorito = JSON.parse(localStorage.getItem('favoriteRecipes'));
          const filteredFavorite = favorito.filter((item) => item.type === 'food');
          setFavoriteRecipes(filteredFavorite);
        } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          const favorito = JSON.parse(localStorage.getItem('favoriteRecipes'));
          const filteredFavorite = favorito.filter((item) => item.type === 'drink');
          setFavoriteRecipes(filteredFavorite);
        } }
      >
        Drink
      </button>
    </StyledDiv>
  );
};

export default BtnRecipeInfos;
