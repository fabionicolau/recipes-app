import React, { useEffect, useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import fetchCustom from '../../services/FetchCustom';
import Categories from '../../Components/Categories/Index';

const Foods = () => {
  const { setData, setCategoriesData } = useContext(MyContext);
  const endpointRoot = 'https://www.themealdb.com/api/json/v1/1/';

  useEffect(() => {
    setData([]);
    const endpoint = `${endpointRoot}search.php?s=`;
    const endpointCategories = `${endpointRoot}list.php?c=list`;
    const FIVE = 5;
    fetchCustom(endpoint).then((data) => setData(data));
    fetchCustom(endpointCategories)
      .then(({ meals }) => setCategoriesData(meals.slice(0, FIVE)));
  }, [setData, setCategoriesData]);

  return (
    <>
      <Header title="Foods" endpoint={ endpointRoot } />
      <h1>teste </h1>
      <Categories endpoint={ endpointRoot } />
      <RecipeCards page="Foods" />
      <FooterMenu />
    </>
  );
};

export default Foods;
