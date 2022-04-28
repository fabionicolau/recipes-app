import React, { useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import fetchCustom from '../../services/FetchCustom';
import Categories from '../../Components/Categories/Index';

const Drinks = ({ title }) => {
  const { setData, setCategoriesData } = useContext(MyContext);
  const endpointRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';

  useEffect(() => {
    setData([]);
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const endpointCategories = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const FIVE = 5;
    fetchCustom(endpoint).then((data) => setData(data));
    fetchCustom(endpointCategories)
      .then(({ drinks }) => setCategoriesData(drinks.slice(0, FIVE)));
  }, [setData, setCategoriesData]);

  return (
    <>
      <Header title="Drinks" />
      <h1>{ title }</h1>
      <Categories endpoint={ endpointRoot } />
      <RecipeCards page="Drinks" />
      <FooterMenu />
    </>
  );
};

Drinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Drinks;
