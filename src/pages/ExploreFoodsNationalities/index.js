import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import NationalitiesDropdown from '../../Components/NationalitiesDropdown';

const ExploreFoodsNationalities = ({ title }) => (
  <div style={ { paddingBottom: '70px' } }>
    <Header title="Explore Nationalities" />
    <h1>{title}</h1>
    <NationalitiesDropdown />
    <RecipeCards page="Foods" />
    <FooterMenu />
  </div>
);

ExploreFoodsNationalities.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoodsNationalities;
