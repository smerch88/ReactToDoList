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

export const ButtonsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 8px;
`;

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 8px;

  > li {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
