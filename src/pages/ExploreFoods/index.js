import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import SurpriseButton from '../../Components/SurpriseButton';

const ExploreFoods = ({ title }) => (
  <>
    <Header title="Explore Foods" />
    <h1>{title}</h1>
    <Link to="/explore/foods/ingredients">
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
    </Link>
    <Link to="/explore/foods/nationalities">
      <button
        type="button"
        data-testid="explore-by-nationality"
      >
        By Nationality
      </button>
    </Link>
    <SurpriseButton
      endpoint="https://www.themealdb.com/api/json/v1/1/random.php"
      page="Foods"
    />
    <FooterMenu />
  </>
);
ExploreFoods.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoods;
