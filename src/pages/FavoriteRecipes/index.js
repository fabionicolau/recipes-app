import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const FavoriteRecipes = ({ title }) => (
  <>
    <Header title="Favorite Recipes" />
    <h1>{title}</h1>
  </>
);

FavoriteRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default FavoriteRecipes;
