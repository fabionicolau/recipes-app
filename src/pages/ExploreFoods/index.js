import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const ExploreFoods = ({ title }) => (
  <>
    <Header title="Explore Foods" />
    <h1>{title}</h1>
    <FooterMenu />
  </>
);

ExploreFoods.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoods;
