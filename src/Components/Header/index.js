import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import Searchbar from '../Searchbar';
import * as S from './style';

const Header = ({ title, endpoint }) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <S.StyledHeader>
      <Link
        to="/profile"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Profile Icon"
        />
      </Link>

      <h1 data-testid="page-title">{title}</h1>

      {(title === 'Foods'
      || title === 'Explore Nationalities'
      || title === 'Drinks')
      && (
        <S.StyledBtn
          type="button"
          onClick={ () => setIsSearching(!isSearching) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="Search Icon"
          />
        </S.StyledBtn>
      )}
      {isSearching && <Searchbar endpoint={ endpoint } />}
    </S.StyledHeader>
  );
};

Header.propTypes = {
  title: propTypes.string,
  endpoint: propTypes.string,
}.isRequired;
export default Header;
