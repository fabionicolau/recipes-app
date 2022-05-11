import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: ${({ title }) => {
    if (
      title === 'Foods'
      || title === 'Drinks'
      || title === 'Explore Nationalities'
    ) {
      return 'space-between';
    }
    return 'space-around';
  }};

  align-items: center;
  padding: 3px;
  background-color: #f7a14d;
  height: 60px;

  h1 {
    font-size: ${({ title }) => {
    if (
      title === 'Explore Ingredients'
      || title === 'Explore Nationalities'
    ) {
      return '1rem';
    }
    return '1.2rem';
  }};
  }
`;

export const StyledBtn = styled.button`
  height: 90%;
  border: none;
  margin: 0 10px;
  border-radius: 15%;
  background-color: #f7a14d;
  cursor: pointer;
`;
