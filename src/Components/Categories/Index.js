import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';

const Categories = () => {
  const { categoriesData } = useContext(MyContext);

  return (
    <div>
      <button
        type="button"
        key="all"
        data-testid="All-category-filter"
      >
        All
      </button>
      { categoriesData.map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </button>
      )) }
    </div>
  );
};

export default Categories;
