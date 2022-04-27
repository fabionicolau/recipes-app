import React, { useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [data, setData] = useState([]);

  const context = {
    data,
    setData,
    setUserInfo,
    userInfo,
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
