import styled from 'styled-components';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => {
    switch (props.variant) {
        case 'secondary':
            return props.theme.colors.gray;
        case 'tertiary':
            return 'transparent';
        default:
            return props.theme.colors.yellow;
    }
}};
  color: ${(props) => {
    switch (props.variant) {
        case 'tertiary':
            return props.theme.colors.yellow;
        default:
            return props.theme.colors.eden;
    }
}};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: 600;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.elementor-item {
    margin-left: 20px;
  }

  &.elementor-item-anchor {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.eden};
    padding: 0;
    border: none;
    font-size: ${(props) => props.theme.fontSize.xl};
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.red};
    }
  }

  &.nav-link {
    color: ${(props) => props.theme.colors.cream};
    text-decoration: none;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize.xl};
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.red};
      outline: none;
      text-decoration: none;
    }
  }
`;

