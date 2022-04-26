import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const ExploreFoodsIngredients = ({ title }) => (
  <>
    <Header title="Explore Ingredients" />
    <h1>{title}</h1>
  </>
);

ExploreFoodsIngredients.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoodsIngredients;
