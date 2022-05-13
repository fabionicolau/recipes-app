import React from 'react';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

const StudentsCards = () => {
  const tribo19 = 'Turma 19 - Tribo C';
  return (
    <div>
      <div className="dev-card">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02HZ367FFC-96b3ed136ddb-512" alt="Leticia" className="dev-picture" />
        <h4>Leticia de Paula</h4>
        <p>{tribo19}</p>
        <a href="https://github.com/LeticiaDePaula" target="_blank" rel="noreferrer noopener">
          <img src={ github } alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/leticiaconstantedepaula/" target="_blank" rel="noreferrer noopener">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </div>

      <div className="dev-card">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02L4SMRVAS-ebea04d95511-512" alt="Fabio" className="dev-picture" />
        <h4>Fábio Nicolau</h4>
        <p>{tribo19}</p>
        <a href="https://github.com/fabionicolau" target="_blank" rel="noreferrer noopener">
          <img src={ github } alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/fabio-nicolau/" target="_blank" rel="noreferrer noopener">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </div>

      <div className="dev-card">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02L4SQJ73Q-255171364be7-512" alt="Ladylane" className="dev-picture" />
        <h4>Ladylane Sousa</h4>
        <p>{tribo19}</p>
        <a href="https://github.com/Ladylane" target="_blank" rel="noreferrer noopener">
          <img src={ github } alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/ladylane-de-sousa/" target="_blank" rel="noreferrer noopener">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </div>

      <div className="dev-card">
        <img src="https://avatars.githubusercontent.com/u/93617820?v=4" alt="Leticia" className="dev-picture" />
        <h4>Marcilio Lima</h4>
        <p>{tribo19}</p>
        <a href="https://github.com/MarcilioamiL" target="_blank" rel="noreferrer noopener">
          <img src={ github } alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/marcilio-lima-609799124/" target="_blank" rel="noreferrer noopener">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </div>

      <div className="dev-card">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U02L8K4DM8V-5eb20eb74c19-512" alt="Domingos" className="dev-picture" />
        <h4>Domingos Alexandre</h4>
        <p>{tribo19}</p>
        <a href="https://github.com/daxjunior36" target="_blank" rel="noreferrer noopener">
          <img src={ github } alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/domingos-alexandre-s-junior-9b556a201/" target="_blank" rel="noreferrer noopener">
          <img src={ linkedin } alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default StudentsCards;
