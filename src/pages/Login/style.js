import styled from 'styled-components';

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
    /* background-color: #DAA520; */
    background-color: #194544;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #FF0000;
      color: #ddd9ce;
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
    border: none;
    /* background-color: #ff8906; */
    background-color: #fff;
    border-radius: 10px;
    margin: 2px 10px;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;

    ::placeholder {
      /* color: #ddd9ce; */
      color: #000;
    }

    @media(max-width: 700px) {
      width: 70%; 
     }
  }
`;

export const StyledDiv = styled.div`
  background-image: url('http://st.gde-fon.com/wallpapers_original/645773_yabloki_frktyi_eda_stol_kniga_5616x3744_www.Gde-Fon.com.jpg');
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
