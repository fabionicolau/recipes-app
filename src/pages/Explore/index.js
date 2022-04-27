import React from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const Explore = ({ title }) => (
  <>
    <Header title="Explore" />
    <h1>{title}</h1>
    <FooterMenu />
  </>
);

Explore.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Explore;
