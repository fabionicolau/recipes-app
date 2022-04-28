import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';

const Explore = ({ title }) => (
  <>
    <Header title="Explore" />
    <h1>{title}</h1>
    <Link to="/explore/foods">
      <div>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
      </div>
    </Link>
    <Link to="/explore/drinks">
      <div>
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </div>
    </Link>
    <FooterMenu />
  </>
);

Explore.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Explore;
