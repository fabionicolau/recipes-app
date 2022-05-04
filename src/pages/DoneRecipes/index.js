import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import DoneDoneRecipes from '../../Components/DoneDoneRecipes';

const DoneRecipes = ({ title }) => (
  <div>
    <Header title="Done Recipes" />
    <h1>{title}</h1>
    <DoneDoneRecipes />

  </div>
);
DoneRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default DoneRecipes;
