import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const ExploreDrinksIngredients = ({ title }) => (
  <>
    <Header title="Explore Ingredients" />
    <h1>{title}</h1>
  </>
);

ExploreDrinksIngredients.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreDrinksIngredients;
