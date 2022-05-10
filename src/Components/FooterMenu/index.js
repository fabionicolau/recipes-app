import React from 'react';
import { useHistory } from 'react-router-dom';
import { func } from 'prop-types';
import exploreIcon from '../../images/exploreIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import StylesFooter from './style';

const FooterMenu = () => {
  const history = useHistory();
  return (
    <div>
      <StylesFooter data-testid="footer">
        <button
          type="button"
          onClick={ () => history.push('/drinks') }
          data-testid="drinks-bottom-btn"
          title="Drinks"
          src={ drinkIcon }
        >
          <img src={ drinkIcon } alt="drinks" />
        </button>
        <button
          type="button"
          onClick={ () => history.push('/explore') }
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          title="Explore"
        >
          <img src={ exploreIcon } alt="explore" />
        </button>
        <button
          type="button"
          onClick={ () => history.push('/foods') }
          data-testid="food-bottom-btn"
          src={ mealIcon }
          title="Food"
        >
          <img src={ mealIcon } alt="foods" />
        </button>
      </StylesFooter>
    </div>
  );
};

FooterMenu.propTypes = {
  push: func,
}.isRequired;

export default FooterMenu;
