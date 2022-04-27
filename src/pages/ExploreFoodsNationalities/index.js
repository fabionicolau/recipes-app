import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const ExploreFoodsNationalities = ({ title }) => (
  <>
    <Header title="Explore Nationalities" />
    <h1>{title}</h1>
    <FooterMenu />
  </>
);

ExploreFoodsNationalities.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoodsNationalities;
