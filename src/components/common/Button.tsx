import styled from "styled-components";

interface ButtonProps {
    backgroundColor?: string;
    color?: string;
    hoverBackgroundColor?: string;
    hoverColor?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || props.theme.colors.eden};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.theme.fontSize.base};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || props.theme.colors.blue};
    color: ${(props) => props.hoverColor || "white"};
  }
`;



