import React from 'react';
import { Link } from 'react-router-dom';
import StudentsInfo from '../../Components/StudentsInfo';
import leftArrow from '../../images/leftArrow.svg';

const GroupInfo = () => (
  <div className="dev-about">
    <header style={ { backgroundColor: '#f7a14d' } }>
      {/* <h2>Sobre</h2> */}
      <h3 style={ { textAlign: 'center', padding: '10px' } }>
        &#169;
        {' Group = 2 + "2"'}
      </h3>
    </header>
    <main>
      <StudentsInfo />
    </main>
    <footer
      style={ { backgroundColor: '#f7a14d',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '10px' } }
    >
      <Link to="/">
        <img alt="return arrow" src={ leftArrow } width="50px" />
      </Link>
    </footer>
  </div>
);

export default GroupInfo;
