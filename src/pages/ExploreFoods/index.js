import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import SurpriseButton from '../../Components/SurpriseButton';
import StyledDiv from '../../styleService/style';

const ExploreFoods = () => {
  const history = useHistory();
  return (
    <>
      <Header title="Explore Foods" />
      <StyledDiv>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>

        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <SurpriseButton
          endpoint="https://www.themealdb.com/api/json/v1/1/random.php"
          page="Foods"
        />
      </StyledDiv>
      <FooterMenu />
    </>
  );
};
ExploreFoods.propTypes = {
  title: propTypes.string,
}.isRequired;

export default ExploreFoods;
