import styled from 'styled-components';

export const Button = styled.button`
  padding: 4px;
  border-radius: 8px;
  border: 1px solid blue;

  transform: all;
  transition-duration: 250ms;

  background-color: transparent;
  /* background-color: ${props => {
    if (props.bg === 'all') {
      return `#ff00ff`;
    } else if (props.bg === 'true') {
      return `#ff00ff`;
    } else if (props.bg === 'false') {
      return `#ff00ff`;
    }
  }}; */

  &:hover {
    border: 1px solid green;
    transform: scaleX(1.1);
  }
`;

export const Form = styled.form`
  background-color: transparent;
  margin-top: 20px;
  margin-left: 40px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
`;
