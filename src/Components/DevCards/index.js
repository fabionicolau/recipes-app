import React from 'react';
import PropTypes from 'prop-types';
import linkedinImage from '../../images/linkedin.png';
import githubImage from '../../images/github.png';

const DevCards = ({ nome, foto, github, linkedin, user }) => (
  <div className="dev-card">
    <div className="dev-card-main">
      <h4>{ nome }</h4>
      <div className="dev-social-media">
        <a href={ linkedin } target="_blank" rel="noreferrer noopener">
          <img
            src={ linkedinImage }
            alt="linkedin"
            style={ { width: '25px', height: '25px' } }
          />
        </a>
        <a href={ github } target="_blank" rel="noreferrer noopener">
          <img src={ githubImage } alt="github" />
        </a>
        { user }
      </div>
    </div>
    <img src={ foto } alt={ nome } className="dev-picture" />
  </div>
);

DevCards.propTypes = {
  nome: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default DevCards;
