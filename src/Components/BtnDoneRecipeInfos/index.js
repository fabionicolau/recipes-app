import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';

const BtnRecipeInfos = () => {
  const { setDoneRecipes } = useContext(MyContext);
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => {
          const done = JSON.parse(localStorage.getItem('doneRecipes'));
          setDoneRecipes(done);
        } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          const done = JSON.parse(localStorage.getItem('doneRecipes'));
          const filteredDone = done.filter((item) => item.type === 'food');
          setDoneRecipes(filteredDone);
        } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          const done = JSON.parse(localStorage.getItem('doneRecipes'));
          const filteredDone = done.filter((item) => item.type === 'drink');
          setDoneRecipes(filteredDone);
        } }
      >
        Drink
      </button>
    </div>
  );
};

export default BtnRecipeInfos;
