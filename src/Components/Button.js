import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  background: transparent;
  border: 0.1rem solid var(--mainDark);
  border-color: ${props => props.cart ? "var(--mainGreen)" : "var(--mainDark)"};
  color: ${props => props.cart ? "var(--mainGreen)" : "var(--mainDark)"};
  border-radius: 0.8rem;
  padding: 0.5rem 0.5rem;
  cursor:pointer;
  margin: 0.2rem;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: ${props => props.cart ? "var(--mainGreen)" : "var(--mainDark)"}; 
    color: var(--mainWhite);
  }

`