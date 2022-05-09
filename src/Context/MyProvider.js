import React, { useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [data, setData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [isExplorerIngredients, setIsExplorerIngredients] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const context = {
    data,
    setData,
    setUserInfo,
    userInfo,
    categoriesData,
    setCategoriesData,
    redirect,
    setRedirect,
    activeCategory,
    setActiveCategory,
    ingredients,
    setIngredients,
    isExplorerIngredients,
    setIsExplorerIngredients,
    favoriteRecipes,
    setFavoriteRecipes,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default MyProvider;
