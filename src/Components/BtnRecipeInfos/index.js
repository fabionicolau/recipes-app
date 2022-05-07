import React from 'react';

const BtnRecipeInfos = () => (
  <div>
    <button type="button" data-testid="filter-by-all-btn">
      All
    </button>
    <button type="button" data-testid="filter-by-food-btn">
      Food
    </button>
    <button type="button" data-testid="filter-by-drink-btn">
      Drink
    </button>
  </div>
);

export default BtnRecipeInfos;
