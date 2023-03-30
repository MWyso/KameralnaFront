// import React from 'react';
// import { MenuEntity } from 'types';
// import {MenuItem} from "./MenuItem";
//
// interface Props {
//     menuTable: MenuEntity[];
// }
//
// export const MenuTable = (props: Props) => (
//     <table>
//         <thead>
//         <tr>
//             <th>Danie</th>
//             <th>Opis</th>
//             <th>Cena</th>
//         </tr>
//         </thead>
//         <tbody>
//         {
//             props.menuTable.map(menu => (
//                 <MenuItem menuItem={menu} key={menu.id}/>
//             ))
//         }
//         </tbody>
//     </table>
// );

import React from 'react';
import { MenuEntity } from 'types';
import { MenuItem } from "./MenuItem";
import styled, { ThemeProvider } from 'styled-components';
import {theme} from "../Theme";

interface Props {
    menuTable: MenuEntity[];
}

export const MenuTable = (props: Props) => (
    <ThemeProvider theme={theme}>
        <StyledTable>
            <thead>
            <tr>
                <StyledTh>Danie główne</StyledTh>
                <StyledTh>Dodatki</StyledTh>
                <StyledTh>Cena</StyledTh>
                <StyledTh>Zamów</StyledTh>
            </tr>
            </thead>
            <tbody>
            {props.menuTable.map((menu) => (
                <MenuItem menuItem={menu} key={menu.id} />
            ))}
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

