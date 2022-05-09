import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FavoriteRecipeInfos from '../../Components/FavoriteRecipeInfos';
import BtnRecipeInfos from '../../Components/BtnRecipeInfos';

const FavoriteRecipes = ({ title }) => (
  <>
    <Header title="Favorite Recipes" />
    <h1>{title}</h1>
    <BtnRecipeInfos />
    <FavoriteRecipeInfos />
  </>
);

FavoriteRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default FavoriteRecipes;
