import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const BtnShare = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      {isCopied
        ? 'Link copied!'
        : (
          <button
            data-testid="share-btn"
            type="button"
            onClick={ () => {
              copy(window.location.href.replace('/in-progress', ''));
              setIsCopied(true);
            } }
            src={ shareIcon }
          >
            <img src={ shareIcon } alt="Share icon" />
          </button>
        )}
    </div>
  );
};

export default BtnShare;
