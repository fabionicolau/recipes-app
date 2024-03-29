import styled from 'styled-components';
import frutas from '../../images/frutas.jpg';

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  button {
    width: 6%;
    padding-left: 10px;
    height: 50px;
    border: none;
    border-radius: 10px;
    margin: 2px 10px;
    color: #fff;
    outline: none;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    background-color: #6B7A00;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #ADC50F;
      color: #4A7308;
      border-color: #4A7308;
    }
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
      color: #ddd9ce;
    }

    @media(max-width: 700px) {
      width: 30%; 
    }
  }

  input {
    width: 20%;
    padding-left: 10px;
    height: 50px;
    border: 1px solid #fff;
    background-color: #C05001;
    border-radius: 10px;
    margin: 2px 10px;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;

    ::placeholder {
      color: #ccc;
    }

    @media(max-width: 700px) {
      width: 70%; 
    }
  }
`;

export const StyledDiv = styled.div`

  background-image: url(${frutas});
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50%;
    box-sizing: border-box;
    box-shadow: 0 8px 32px 0 rgba( 10, 14, 2, 0.5 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 5%;
    border: 1px solid rgba( 255, 255, 255, 1 );

    @media(max-width: 700px) {
      width: 90%; 
    }
  }
`;
