import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const BtnShare = ({ testId }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      {isCopied
        ? 'Link copied!'
        : (
          <button
            data-testid={ testId }
            type="button"
            onClick={ () => {
              copy(window.location.href.replace('/in-progress', ''));
              setIsCopied(true);
            } }
          >
            <img src={ shareIcon } alt="Share icon" />
          </button>
        )}
    </div>
  );
};

BtnShare.propTypes = {
  testId: PropTypes.string.isRequired,
}.isRequired;

export default BtnShare;
