import React, { useEffect, useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import fetchCustom from '../../services/FetchCustom';
import Categories from '../../Components/Categories/Index';

const Drinks = () => {
  const { setData, setCategoriesData, isExplorerIngredients } = useContext(MyContext);
  const endpointRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';

  useEffect(() => {
    const endpoint = `${endpointRoot}search.php?s=`;
    const endpointCategories = `${endpointRoot}list.php?c=list`;
    const FIVE = 5;
    if (!isExplorerIngredients) {
      fetchCustom(endpoint).then((data) => setData(data));
    }
    fetchCustom(endpointCategories)
      .then(({ drinks }) => setCategoriesData(drinks.slice(0, FIVE)));
  }, [setData, setCategoriesData, isExplorerIngredients]);

  return (
    <>
      <Header title="Drinks" endpoint={ endpointRoot } />
      <Categories endpoint={ endpointRoot } />
      <RecipeCards page="Drinks" />
      <FooterMenu />
    </>
  );
};

export default Drinks;
