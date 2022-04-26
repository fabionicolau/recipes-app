import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const Drinks = ({ title }) => (
  <>
    <Header title="Drinks" />
    <h1>{title}</h1>
  </>
);

Drinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Drinks;
