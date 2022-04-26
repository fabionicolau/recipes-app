import React, { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../../Context/MyContext';

const Login = () => {
  const { setUserInfo } = useContext(MyContext);
  const history = useHistory();

  const [inputsInfo, setInputsInfo] = useState({
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const validate = () => {
      const CHARACTER = 7;
      const valRegex = inputsInfo.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      if (valRegex && inputsInfo.password.length >= CHARACTER) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validate();
  }, [inputsInfo]);

  return (
    <form>
      <input
        data-testid="email-input"
        type="email"
        name="email"
        value={ inputsInfo.email }
        onChange={ ({ target }) => {
          setInputsInfo({
            ...inputsInfo,
            email: target.value,
          });
        } }
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={ inputsInfo.password }
        onChange={ ({ target }) => {
          setInputsInfo({
            ...inputsInfo,
            password: target.value,
          });
        } }
      />
      <button
        data-testid="login-submit-btn"
        type="button"
        disabled={ isDisabled }
        onClick={ () => {
          setUserInfo(inputsInfo);
          localStorage.setItem('user', JSON.stringify({ email: inputsInfo.email }));
          localStorage.setItem('mealsToken', JSON.stringify(1));
          localStorage.setItem('cocktailsToken', JSON.stringify(1));
          history.push('/foods');
        } }
      >
        Enter

      </button>
    </form>
  );
};

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
}.isRequired;

export default Login;
