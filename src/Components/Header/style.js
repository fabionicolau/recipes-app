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
  font-weight: 500px;
`;

export const StyledBtn = styled.button`
  height: 90%;
  border: none;
  margin: 0 10px;
  border-radius: 15%;
  background-color: #f7a14d;
  cursor: pointer;
`;
