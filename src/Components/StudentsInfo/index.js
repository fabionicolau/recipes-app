import React from 'react';
import StudentsCards from '../StudentsCards';
import './styles.css';

const StudentsInfo = () => (
  <div className="div-container">
    <p>
      Para apresentar nosso app de receitas,
      criamos esta página com informações sobre o grupo e o desenvolvimento do projeto.
    </p>
    <h4 className="h4-info">Tecnologias utilizadas:</h4>
    <div className="div-tec">
      <ul>
        <li>
          <input type="checkbox" checked />
          React
        </li>
        <li>
          <input type="checkbox" checked />
          React-router
        </li>
        <li>
          <input type="checkbox" checked />
          Context API
        </li>
        <li>
          <input type="checkbox" checked />
          Hooks
        </li>
        <li>
          <input type="checkbox" checked />
          Styled-components
        </li>
        <li>
          <input type="checkbox" checked={ false } />
          React-Testing-Library
        </li>
      </ul>
    </div>
    <div>
      <h4 className="h4-info">Colaboração e comunicação:</h4>
      <p>
        Todos nós tivemos o mesmo papel, nós combinamos de nos encontrar no horário
        normal da Trybe e de tentarmos fazer tudo juntos mas mantendo a liberdade
        para quem quisesse continuar fora desse horário. Isso acabou ocorrendo com
        muita frequência, o que pode soar cansativo, mas foi muito enriquecedor para
        aprimorarmos nossas skills(soft && hard).
        Apesar de termos algumas dificuldades na lógica, nós pudemos contar sempre
        com o grupo todo, o que facilitou o desenvolvimento do projeto.
      </p>
    </div>
    <div>
      <h3>Equipe de desenvolvimento:</h3>
      <StudentsCards />
    </div>
  </div>
);

export default StudentsInfo;
