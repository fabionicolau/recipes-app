// export const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
// export const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
// export const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
// export const pageStr = page === 'Foods' ? 'foods' : 'drinks';
// export const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
export const recipeSelector = (page) => (page === 'Foods' ? 'meals' : 'cocktails');
const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

export const DataIdType = (isRecomendation) => (isRecomendation
  ? 'recomendation' : 'recipe');

export const DataIdRecomendation = (isRecomendation) => (
  isRecomendation
    ? '-recomendation-title' : '-card-name'
);

export const verifyInProgress = (page, recipeId) => {
  const recipesGotten = inProgressRecipes
    ? Object.keys(inProgressRecipes[recipeSelector(page)]) : [];
  return recipesGotten?.some((key) => key === recipeId);
};

export const verifyDone = (recipeId) => {
  const recipesGotten = doneRecipes;
  return recipesGotten?.some((item) => item.id === recipeId);
};

export const verifyStarting = (page, recipeId) => (
  !verifyInProgress(page, recipeId) && !verifyDone(recipeId)
);

export const classDefiner = (page, recipeId) => {
  if (verifyInProgress(page, recipeId)) {
    return 'in-progress';
  }
  if (verifyDone(recipeId)) {
    return 'done';
  }
  return 'start';
};

export const testIdDefiner = (page, recipeId) => {
  if (verifyInProgress(page, recipeId)) {
    return 'start-recipe-btn';
  }
  if (verifyDone(recipeId)) {
    return 'finish-recipe-btn';
  }
  return 'start-recipe-btn';
};

export const innerHTMLDefiner = (page, recipeId) => {
  if (verifyInProgress(page, recipeId)) {
    return 'Continue Recipe';
  }
  if (verifyDone(recipeId)) {
    return 'Finish Recipe';
  }
  return 'Start Recipe';
};
