import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

interface ButtonLinkProps {
    as?: React.ElementType;
    children: React.ReactNode;
    to: string;
    className?: string;
}

export const ButtonLink = styled(NavHashLink)<ButtonLinkProps>`
  // dodaj stylizacje dla przycisku
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.eden};
  font-size: ${(props) => props.theme.fontSize.base};
  text-decoration: none;
  cursor: pointer;
`;