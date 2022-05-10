import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../Context/MyContext';
import fetchCustom from '../../services/FetchCustom';
import StyledDiv from './style';

const Categories = ({ endpoint }) => {
  const {
    categoriesData,
    setData,
    activeCategory,
    setActiveCategory,
  } = useContext(MyContext);

  const handleClick = ({ target: { name } }) => {
    if (name === activeCategory || name === 'all') {
      setActiveCategory('');
      setData([]);
      fetchCustom(`${endpoint}search.php?s=`).then((data) => setData(data));
    } else {
      setActiveCategory(name);
      setData([]);
      fetchCustom(`${endpoint}filter.php?c=${name}`).then((data) => setData(data));
    }
  };

  return (
    <StyledDiv>
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
    </StyledDiv>
  );
};

Categories.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default Categories;
