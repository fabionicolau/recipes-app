import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FavoriteRecipeInfos from '../../Components/FavoriteRecipeInfos';
// import BtnFavoritar from '../../Components/BtnFavoritar';

const FavoriteRecipes = ({ title }) => (
  <>
    <Header title="Favorite Recipes" />
    <h1>{title}</h1>
    <FavoriteRecipeInfos />
    {/* <BtnFavoritar /> */}

  </>
);

FavoriteRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default FavoriteRecipes;
