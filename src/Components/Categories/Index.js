import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';

const Categories = ({ endpoint }) => {
  const { categoriesData, setData } = useContext(MyContext);

  const handleClick = ({ target: { name } }) => {
    setData([]);
    fetchCustom(`${endpoint}filter.php?c=${name}`).then((data) => setData(data));
  };

  return (
    <div>
      <button
        type="button"
        key="all"
        name="all"
        data-testid="All-category-filter"
        onClick={ handleClick }
      >
        All
      </button>
      { categoriesData.map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          name={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ handleClick }
        >
          {strCategory}
        </button>
      )) }
    </div>
  );
};

Categories.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Categories;
