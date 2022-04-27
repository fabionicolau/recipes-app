import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const ExploreDrinksIngredients = ({ title }) => (
  <>
    <Header title="Explore Ingredients" />
    <h1>{title}</h1>
    <FooterMenu />
  </>
);

ExploreDrinksIngredients.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreDrinksIngredients;
