import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BtnDoneRecipeInfos from '../BtnDoneRecipeInfos';
import MyContext from '../../Context/MyContext';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const DoneRecipeInfos = () => {
  const { doneRecipes, setDoneRecipes } = useContext(MyContext);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setDoneRecipes(() => {
      const data = localStorage.getItem('doneRecipes');
      if (data) {
        return JSON.parse(data);
      }
      return [];
    });
  }, [setDoneRecipes]);

  return (
    <>
      <BtnDoneRecipeInfos />
      {
        doneRecipes && doneRecipes.map((recipe, index) => {
          const {
            id,
            type,
            category,
            nationality,
            alcoholicOrNot,
            name,
            image,
            doneDate,
            tags,
          } = recipe;
          const tagsArray = typeof tags === 'string' ? tags.split(',') : tags;
          return (
            <div key={ id }>
              <Link to={ `/${type}s/${id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                  width="150"
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
              </Link>
              {
                type === 'food' ? (
                  <h3
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    {`${nationality} - ${category}`}
                  </h3>
                ) : (
                  <h3 data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</h3>
                )
              }
              <h4>
                <span>Done in:</span>
                <span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>
              </h4>
              {
                isCopied ? (<span>Link copied!</span>) : (
                  <button
                    data-testid={ `${index}-horizontal-share-btn` }
                    type="button"
                    src={ shareIcon }
                    onClick={ () => {
                      copy(window.location.href
                        .replace('/done-recipes', `/${type}s/${id}`));
                      setIsCopied(true);
                    } }
                  >
                    <img src={ shareIcon } alt="Share icon" />
                  </button>)
              }
              {
                tagsArray !== null && tagsArray.map((tag) => (
                  <span
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                    key={ tag }
                  >
                    {tag}
                  </span>))
              }
            </div>
          );
        })
      }
    </>
  );
};

export default DoneRecipeInfos;
