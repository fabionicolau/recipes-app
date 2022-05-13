import React from 'react';
import './style.css';
import DevCards from '../DevCards';

const StudentsCards = () => (
  <div className="container2">
    <DevCards
      nome="Leticia de Paula"
      foto="https://ca.slack-edge.com/TMDDFEPFU-U02HZ367FFC-96b3ed136ddb-512"
      github="https://github.com/LeticiaDePaula"
      linkedin="https://www.linkedin.com/in/leticiaconstantedepaula/"
      user="/LeticiaDePaula"
    />
    <DevCards
      nome="Fábio Nicolau"
      foto="https://ca.slack-edge.com/TMDDFEPFU-U02L4SMRVAS-ebea04d95511-512"
      github="https://github.com/fabionicolau"
      linkedin="https://www.linkedin.com/in/fabio-nicolau/"
      user="/fabionicolau"
    />
    <DevCards
      nome="Ladylane Sousa"
      foto="https://ca.slack-edge.com/TMDDFEPFU-U02L4SQJ73Q-255171364be7-512"
      github="https://github.com/Ladylane"
      linkedin="https://www.linkedin.com/in/ladylane-de-sousa/"
      user="/Ladylane"
    />
    <DevCards
      nome="Marcilio Lima"
      foto="https://avatars.githubusercontent.com/u/93617820?v=4"
      github="https://github.com/MarcilioamiL"
      linkedin="https://www.linkedin.com/in/marcilio-lima-609799124/"
      user="/MarcilioamiL"
    />
    <DevCards
      nome="Domingos Alexandre"
      foto="https://ca.slack-edge.com/TMDDFEPFU-U02L8K4DM8V-5eb20eb74c19-512"
      github="https://github.com/daxjunior36"
      linkedin="https://www.linkedin.com/in/domingos-alexandre-s-junior-9b556a201/"
      user="/daxjunior36"
    />
  </div>
);

export default StudentsCards;
