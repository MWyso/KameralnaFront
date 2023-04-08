import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { UserEntity } from 'types';

import {theme} from "../../Theme";
import {AdminDelete} from "./AdminDelete";

interface Props {
    adminListTable: UserEntity[];
    onItemChange: () => void;
}

export const AdminListTable = (props: Props) => (
    <ThemeProvider theme={theme}>
        <StyledTable>
            <thead>
            <tr>
                <StyledTh>Nazwa</StyledTh>
                <StyledTh>E-mail</StyledTh>
                <StyledTh>Usuń</StyledTh>
            </tr>
            </thead>
            <tbody>
            {
                props.adminListTable.map(user => (
                    <AdminDelete user={user} key={user.id} onItemChange={props.onItemChange}/>
                ))
            }
            </tbody>
        </StyledTable>
    </ThemeProvider>
);

// const StyledTable = styled.table`
//   border-collapse: collapse;
//   width: 100%;
// `;
//
// const StyledTh = styled.th`
//   background-color: ${({ theme }) => theme.colors.eden};
//   border: 2px solid ${({ theme }) => theme.colors.yellow};
//   color: ${({ theme }) => theme.colors.cream};
//   font-size: ${({ theme }) => theme.fontSize.lg};
//   padding: 1rem;
//   text-align: center;
// `;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

const StyledTh = styled.th`
  background-color: ${({ theme }) => theme.colors.eden};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.cream};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.base};
    padding: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;