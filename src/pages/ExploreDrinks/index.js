import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import SurpriseButton from '../../Components/SurpriseButton';
import StyledDiv from '../../styleService/style';

const ExploreDrinks = () => {
  const history = useHistory();
  return (
    <>
      <Header title="Explore Drinks" />
      <StyledDiv>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <SurpriseButton
          endpoint="https://www.thecocktaildb.com/api/json/v1/1/random.php"
          page="Drinks"
        />
      </StyledDiv>
      <FooterMenu />
    </>
  );
};

ExploreDrinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreDrinks;
