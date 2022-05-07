import React from 'react';
import BtnRecipeInfos from '../BtnRecipeInfos';
import BtnShare from '../BtnShare';
// import shareIcon from '../../images/shareIcon.svg';

const DoneRecipeInfos = () => (
  <>
    {/* <img
      data-testid={ `${index}-horizontal-image` }
      src={ image }
      alt={ title }
    />
    <h3 data-testid={ ` ${index}-horizontal-top-text` }>{topText}</h3>
    <h3 data-testid={ ` ${index}-horizontal-name` }>{bottomText}</h3>
    <h4>
      <span>Done in:</span>
      <span data-testid={ `${index}-horizontal-done-date` }>{date}</span>
    </h4>

    <span
      data-testid={ `${index}-${tagName}-horizontal-tag` }
    >
      {tagName}
    </span> */}

    {/* <img
      data-testid={ `${index}-horizontal-share-btn` }
      src={ shareIcon }
      alt="Share icon"
    /> */}
    <BtnRecipeInfos />
    <BtnShare />
  </>
);

export default DoneRecipeInfos;
