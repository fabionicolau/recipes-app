import styled from 'styled-components/';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 5px;
  margin: 10px auto;

  button{
    width: 30%;
    text-align: center;
    background: rgba( 245, 166, 35, 0.35 );
    font-size: 13px;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    /* backdrop-filter: blur( 2.5px );
    -webkit-backdrop-filter: blur( 2.5px ); */
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  } 
`;
export default StyledDiv;
