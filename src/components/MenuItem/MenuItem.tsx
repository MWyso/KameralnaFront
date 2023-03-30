import React from 'react';
import { MenuEntity } from 'types';
import styled from "styled-components";

interface Props {
    menuItem: MenuEntity;
}

export const MenuItem = (props: Props) => {
    return (
        <tr>
            <StyledTd>{props.menuItem.name}</StyledTd>
            <StyledTd>{props.menuItem.description}</StyledTd>
            <StyledTd>{props.menuItem.price.toFixed(2)} zł</StyledTd>
            <StyledTd></StyledTd>
        </tr>
    );
};

const StyledTd = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: white;
  padding: 1rem;
`;