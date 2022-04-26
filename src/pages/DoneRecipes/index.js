import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const DoneRecipes = ({ title }) => (
  <>
    <Header title="Done Recipes" />
    <h1>{title}</h1>
  </>
);

DoneRecipes.propTypes = {
  title: propTypes.string,
}.isRequired;

export default DoneRecipes;
