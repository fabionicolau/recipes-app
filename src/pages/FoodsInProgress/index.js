import React from 'react';
import RecipeInProgressInfos from '../../Components/RecipeInProgressInfos';

const FoodsInProgress = () => {
  const aFoodsInProgress = 'FoodsInProgress';
  return (
    <div>
      { aFoodsInProgress }
      <RecipeInProgressInfos page="Foods" />
    </div>
  );
};

export default FoodsInProgress;
