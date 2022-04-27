import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const ExploreFoodsIngredients = ({ title }) => (
  <>
    <Header title="Explore Ingredients" />
    <h1>{title}</h1>
    <FooterMenu />
  </>
);

ExploreFoodsIngredients.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoodsIngredients;
