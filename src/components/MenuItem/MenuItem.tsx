import React from 'react';
import { MenuEntity } from 'types';
import styled from 'styled-components';

interface Props {
    menuItem: MenuEntity;
}

export const MenuItem = (props: Props) => {
    return (
        <StyledRow>
            <StyledTd>{props.menuItem.name}</StyledTd>
            <StyledTd>{props.menuItem.description}</StyledTd>
            <StyledTd>{props.menuItem.price.toFixed(2)} zł</StyledTd>
            <StyledTd></StyledTd>
        </StyledRow>
    );
};

const StyledRow = styled.tr`
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 5px;
    padding: 1rem;
  }
`;

const StyledTd = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: white;
  padding: 1rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
  }
`;
