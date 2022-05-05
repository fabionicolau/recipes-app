import React from 'react';
import RecipeInProgressInfos from '../../Components/RecipeInProgressInfos';

const DrinksInProgress = () => {
  const aDrinksInProgress = 'DrinksInProgress';
  return (
    <div>
      { aDrinksInProgress }
      <RecipeInProgressInfos page="Drinks" />
    </div>
  );
};

export default DrinksInProgress;
