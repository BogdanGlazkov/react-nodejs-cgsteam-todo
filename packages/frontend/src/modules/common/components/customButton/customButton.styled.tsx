import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  fontSize?: number;
  height?: number;
  width?: number;
}

export const CustomButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize}px;
  min-width: 20%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-bottom: 20px;
  align-self: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    opacity: 0.5;
    transform: scale(1.05);
  }
`;
