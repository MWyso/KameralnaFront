import React from 'react';
import { MenuEntity } from 'types';
import {ItemDelete} from "./ItemDelete";
import styled, { ThemeProvider } from "styled-components";
import {theme} from "../../Theme";

interface Props {
    itemEditTable: MenuEntity[];
    onItemChange: () => void;
}

export const ItemEditTable = (props: Props) => (
    <ThemeProvider theme={theme}>
        <StyledTable>
            <thead>
            <tr>
                <StyledTh>Danie główne</StyledTh>
                <StyledTh>Dodatki</StyledTh>
                <StyledTh>Cena</StyledTh>
                <StyledTh>Usuń</StyledTh>
            </tr>
            </thead>
            <tbody>
        {
            props.itemEditTable.map(menu => (
                <ItemDelete item={menu} key={menu.id} onItemChange={props.onItemChange}/>
            ))
        }
            </tbody>
        </StyledTable>
    </ThemeProvider>
);

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  background-color: ${({ theme }) => theme.colors.eden};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.cream};
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: 1rem;
  text-align: center;
`;

