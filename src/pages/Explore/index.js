import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';

const Explore = ({ title }) => (
  <>
    <Header title="Explore" />
    <h1>{title}</h1>
  </>
);

Explore.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Explore;
