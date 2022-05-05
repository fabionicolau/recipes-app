import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import DoneRecipeInfos from '../../Components/DoneRecipeInfos';

const DoneRecipes = ({ title }) => (
  <div>
    <Header title="Done Recipes" />
    <h1>{title}</h1>
    <DoneRecipeInfos />

  </div>
);
DoneRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default DoneRecipes;
