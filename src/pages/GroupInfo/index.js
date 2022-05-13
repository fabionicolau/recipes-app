import React from 'react';
import { Link } from 'react-router-dom';
import StudentsInfo from '../../Components/StudentsInfo';
import leftArrow from '../../images/leftArrow.svg';

const GroupInfo = () => (
  <div>
    <header>
      <h2>About us</h2>
      <h3>
        &#169;
        {' Group = 2 + "2"'}
      </h3>
    </header>
    <main>
      <StudentsInfo />
    </main>
    <footer>
      <Link to="/">
        <img alt="return arrow" src={ leftArrow } width="100px" />
      </Link>
    </footer>
  </div>
);

export default GroupInfo;
