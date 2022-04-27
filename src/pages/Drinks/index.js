import React, { useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import fetchCustom from '../../services/FetchCustom';

const Drinks = ({ title }) => {
  const { setData } = useContext(MyContext);

  useEffect(() => {
    const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    fetchCustom(endpoint).then((data) => setData(data));
  }, [setData]);

  return (
    <>
      <Header title="Drinks" />
      <h1>{ title }</h1>
      <RecipeCards page="Drinks" />
      <FooterMenu />
    </>
  );
};

Drinks.propTypes = {
  title: propTypes.string,
}.isRequired;

export default Drinks;
