export const recipes = (page) => (page === 'Foods' ? 'meals' : 'drinks');
export const idRecipe = (page) => (page === 'Foods' ? 'idMeal' : 'idDrink');
export const recipeArea = (page) => (page === 'Foods' ? 'strArea' : '');
export const recipeName = (page) => (page === 'Foods' ? 'strMeal' : 'strDrink');
export const recipeImage = (page) => (page === 'Foods'
  ? 'strMealThumb'
  : 'strDrinkThumb');
export const recipeCategory = (page) => (page === 'Foods'
  ? 'strCategory' : 'strAlcoholic');
export const recipeURL = (page) => (page === 'Foods' ? 'themealdb'
  : 'thecocktaildb');
export const recipeSelector = (page) => (page === 'Foods' ? 'meals' : 'cocktails');
export const recipeAlcohol = (page) => (page === 'Foods' ? '' : 'strAlcoholic');
export const recipeType = (page) => (page === 'Foods' ? 'food' : 'drink');

const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const DataIdType = (isRecomendation) => (isRecomendation
  ? 'recomendation' : 'recipe');

export const DataIdRecomendation = (isRecomendation) => (
  isRecomendation
    ? '-recomendation-title' : '-card-name'
);

export const verifyInProgress = (page, recipeId) => {
  inProgressRecipes[recipeSelector(page)] = inProgressRecipes[recipeSelector(page)] || [];
  const recipesGotten = inProgressRecipes
    ? Object.keys(inProgressRecipes[recipeSelector(page)]) : [];
  return recipesGotten?.some((key) => key === recipeId);
};
export const verifyDone = (recipeId) => {
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

export const classDefiner = (page, recipeId) => {
  if (verifyInProgress(page, recipeId)) {
    return 'in-progress-details';
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
  return 'Start Recipe';
};
