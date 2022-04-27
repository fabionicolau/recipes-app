import React, { useEffect, useContext } from 'react';
import MyContext from '../../Context/MyContext';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import RecipeCards from '../../Components/RecipeCards';
import fetchCustom from '../../services/FetchCustom';

const Foods = () => {
  const { setData } = useContext(MyContext);

  useEffect(() => {
    const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    fetchCustom(endpoint).then((data) => setData(data));
  }, [setData]);

  return (
    <>
      <Header title="Foods" />
      <h1>teste </h1>
      <RecipeCards page="Foods" />
      <FooterMenu />
    </>
  );
};

export default Foods;
