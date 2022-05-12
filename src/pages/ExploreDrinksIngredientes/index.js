import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import IngredientsCards from '../../Components/IngredientsCards';

const ExploreDrinksIngredients = ({ title }) => (
  <div style={ { paddingBottom: '70px' } }>
    <Header title="Explore Ingredients" />
    <h1>{title}</h1>
    <IngredientsCards endpoint="https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list" page="Drinks" />
    <FooterMenu />
  </div>
);

ExploreDrinksIngredients.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreDrinksIngredients;
