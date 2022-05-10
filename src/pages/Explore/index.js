import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import StyledDiv from './style';

const Explore = () => {
  const history = useHistory();
  return (
    <>
      <Header title="Explore" />

      <StyledDiv>

        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>

        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>

      </StyledDiv>
      <FooterMenu />
    </>
  );
};

Explore.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Explore;
