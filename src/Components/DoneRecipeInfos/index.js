import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BtnDoneRecipeInfos from '../BtnDoneRecipeInfos';
import MyContext from '../../Context/MyContext';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteCar from './style';

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
    <div>
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

            <FavoriteCar key={ id }>
              <Link to={ `/${type}s/${id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ image }
                  alt={ name }
                  width="150"
                />
                <section>
                  <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
                  <h2>
                    <span>Done in:</span>
                    <span
                      data-testid={ `${index}-horizontal-done-date` }
                    >
                      {doneDate}
                    </span>
                  </h2>
                  {
                    type === 'food' ? (
                      <span
                        data-testid={ `${index}-horizontal-top-text` }
                      >
                        {`${nationality} - ${category}`}
                      </span>
                    ) : (
                      <span
                        data-testid={ `${index}-horizontal-top-text` }
                      >
                        {alcoholicOrNot}
                      </span>
                    )
                  }
                  {
                    tagsArray !== null && tagsArray.splice(0, 2).map((tag) => (
                      <span
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                        key={ tag }
                      >
                        {tag}
                      </span>))
                  }
                </section>
              </Link>
              <section className="btn-share">
                <div>

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
                </div>
              </section>

            </FavoriteCar>
          );
        })
      }
    </div>
  );
};

export default DoneRecipeInfos;
