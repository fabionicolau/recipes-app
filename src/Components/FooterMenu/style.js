import styled from 'styled-components';

const StylesFooter = styled.footer`
  display: flex;
  position: fixed;
  padding: 3px;
  background-color: #F7A14D;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 60px;
  
  
  button {
    height: 90%;
    border: none;
    margin: 0 10px;
    border-radius: 15%;
    background-color: #ffb86c;
    border: 1px solid #fff;
    cursor: pointer;
  }
`;
export default StylesFooter;
