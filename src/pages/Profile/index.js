import React from 'react';
import { func } from 'prop-types';
import { useHistory } from 'react-router-dom';
import FooterMenu from '../../Components/FooterMenu';
import Header from '../../Components/Header';

const Profile = () => {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <Header title="Profile" />
      <h1 data-testid="profile-email">
        <strong>
          { email }
        </strong>
      </h1>
      <button
        type="button"
        onClick={ () => history.push('/done-recipes') }
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>
      <button
        type="button"
        onClick={ () => history.push('/favorite-recipes') }
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/');
        } }
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <FooterMenu />
    </>
  );
};

Profile.propTypes = {
  push: func,
}.isRequired;

export default Profile;
