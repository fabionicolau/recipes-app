import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import SurpriseButton from '../../Components/SurpriseButton';

const ExploreDrinks = ({ title }) => (
  <>
    <Header title="Explore Drinks" />
    <h1>{title}</h1>
    <Link to="/explore/drinks/ingredients">
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
    </Link>
    <SurpriseButton
      endpoint="https://www.thecocktaildb.com/api/json/v1/1/random.php"
      page="Drinks"
    />
    <FooterMenu />
  </>
);

ExploreDrinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreDrinks;
