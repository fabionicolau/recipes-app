import styled from 'styled-components';

export const StyledDiv = styled.div`
  .contentBox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;

  }

  .carousel {
    display: flex;
    justify-content: left;
    flex-wrap: nowrap;
    overflow-x: scroll;

    img {
    width: 170px;
  }
  }
`;

export const StyledCardBox = styled.div`
  display: flex;
  
  justify-content: center;
  text-align: center;
  flex-flow: column wrap;
  gap: 5px;
  border-radius: 10px;
  border: 2px solid #ccc;
  
  box-shadow: 20px 20px 20px 20px inset #ccc;
  
  p {
    color: #000;
    font-size: 0.8rem;
    max-width: 150px;
    margin: 15px 0;
  }

  img {
    width: 150px;
  }
`;
