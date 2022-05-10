import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  gap: 15px;

  button {
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
`;

export default StyledDiv;
