import React, { useState, useEffect, useContext } from 'react';
import fetchCustom from '../../services/FetchCustom';
import MyContext from '../../Context/MyContext';

const NationalitiesDropdown = () => {
  const { setData } = useContext(MyContext);
  const [nationalities, setNationalities] = useState([]);
  const [optionValue, setOptionValue] = useState('');

  useEffect(() => {
    fetchCustom('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((data) => setNationalities(data.meals));
    if (optionValue && optionValue !== 'All') {
      fetchCustom(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${optionValue}`)
        .then((data) => setData(data));
    } else {
      fetchCustom('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((data) => setData(data));
    }
  }, [optionValue, setData]);

  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      onChange={ ((event) => setOptionValue(event.target.value)) }
    >
      <option data-testid="All-option"> All</option>
      {nationalities.map((nationality, index) => (
        <option
          data-testid={ `${nationality.strArea}-option` }
          key={ index }
          value={ nationality.strArea }
        >
          {nationality.strArea}
        </option>
      ))}
    </select>
  );
};

export default NationalitiesDropdown;
