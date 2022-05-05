// export const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
// export const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
// export const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
// export const pageStr = page === 'Foods' ? 'foods' : 'drinks';
// export const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
export const recipeSelector = (page) => (page === 'Foods' ? 'meals' : 'cocktails');
const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

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

const verifyDone = (recipeId) => {
  const recipesGotten = doneRecipes;
  return recipesGotten?.some((item) => item.id === recipeId);
};

export const verifyFavorite = (recipeId) => {
  const recipesGotten = favoriteRecipes;
  return recipesGotten?.some((item) => item.id === recipeId);
};

export const verifyStarting = (page, recipeId) => (
  !verifyInProgress(page, recipeId) && !verifyDone(recipeId)
);

export const classDefiner = (page, recipeId, inProgress) => {
  if (inProgress) {
    return 'in-progress';
  }
  if (verifyInProgress(page, recipeId)) {
    return 'in-progress-details';
  }
  if (verifyDone(recipeId)) {
    return 'done';
  }
  return 'start';
};

export const testIdDefiner = (page, recipeId, inProgress) => {
  if (verifyInProgress(page, recipeId)) {
    return 'start-recipe-btn';
  }
  if (inProgress) {
    return 'finish-recipe-btn';
  }
  return 'start-recipe-btn';
};

export const innerHTMLDefiner = (page, recipeId, inProgress) => {
  if (verifyInProgress(page, recipeId)) {
    return 'Continue Recipe';
  }
  if (inProgress) {
    return 'Finish Recipe';
  }
  return 'Start Recipe';
};

export const disabledDefiner = (inProgress) => {
  if (inProgress) {
    return true;
  }
  return false;
};
