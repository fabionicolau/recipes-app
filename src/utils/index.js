// export const recipeId = page === 'Foods' ? 'idMeal' : 'idDrink';
// export const recipeName = page === 'Foods' ? 'strMeal' : 'strDrink';
// export const recipeImage = page === 'Foods' ? 'strMealThumb' : 'strDrinkThumb';
// export const pageStr = page === 'Foods' ? 'foods' : 'drinks';
// export const recipeCategory = page === 'Foods' ? 'strCategory' : 'strAlcoholic';
export const DataIdType = (isRecomendation) => (isRecomendation
  ? 'recomendation' : 'recipe');

export const DataIdRecomendation = (isRecomendation) => (
  isRecomendation
    ? '-recomendation-title' : '-card-name'
);
