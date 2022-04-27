import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';

const Drinks = ({ title }) => (
  <>
    <Header title="Drinks" />
    <h1>{ title }</h1>
    <RecipeCards page="Drinks" />
    <FooterMenu />
  </>
);

Drinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Drinks;
