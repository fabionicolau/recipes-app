import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: 50vh;
        font-family: Verdana, Tahoma, sans-serif;
        
    }
`;

export default GlobalStyle;

export const StyleBtn = createGlobalStyle`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  gap: 15px;

  button {
    padding-left: 10px;
    height: 50px;
    width: 70%;
    border-radius: 10px;
    margin: 2px 10px;
    background-color: #fff;
    outline: none;
    display: flex;
    border: 1px solid #c05001;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* background: rgba(255, 146, 0, 0.65); */
    box-shadow: 0 2px 10px 0 rgba(250, 200, 0, 0.60);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border-radius: 10px;
    
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    margin: 20px;
  }
`;
