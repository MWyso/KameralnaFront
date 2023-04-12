// // import React from 'react';
// // import { MenuEntity } from 'types';
// // import {MenuItem} from "./MenuItem";
// //
// // interface Props {
// //     menuTable: MenuEntity[];
// // }
// //
// // export const MenuTable = (props: Props) => (
// //     <table>
// //         <thead>
// //         <tr>
// //             <th>Danie</th>
// //             <th>Opis</th>
// //             <th>Cena</th>
// //         </tr>
// //         </thead>
// //         <tbody>
// //         {
// //             props.menuTable.map(menu => (
// //                 <MenuItem menuItem={menu} key={menu.id}/>
// //             ))
// //         }
// //         </tbody>
// //     </table>
// // );
//
// import React from 'react';
// import { MenuEntity } from 'types';
// import { MenuItem } from "./MenuItem";
// import styled, { ThemeProvider } from 'styled-components';
// import {theme} from "../Theme";
//
// interface Props {
//     menuTable: MenuEntity[];
// }
//
// export const MenuTable = (props: Props) => (
//     <ThemeProvider theme={theme}>
//         <StyledTable>
//             <thead>
//             <tr>
//                 <StyledTh>Danie główne</StyledTh>
//                 <StyledTh>Dodatki</StyledTh>
//                 <StyledTh>Cena</StyledTh>
//                 <StyledTh>Zamów</StyledTh>
//             </tr>
//             </thead>
//             <tbody>
//             {props.menuTable.map((menu) => (
//                 <MenuItem menuItem={menu} key={menu.id} />
//             ))}
//             </tbody>
//         </StyledTable>
//     </ThemeProvider>
// );
//
//
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
//

import React from 'react';
import styled from 'styled-components';
import { MenuEntity } from 'types';

interface Props {
    menuTable: MenuEntity[];
}

export const MenuTable = ({ menuTable }: Props) => {
    return (
        <Wrapper>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {menuTable.map((item) => (
                    <tr key={item.id}>
                        <td><b>{item.name}</b></td>
                        <td>{item.description}</td>
                        <td><b>{item.price.toFixed(2)}zł</b></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: ${(props) => props.theme.fontSize.md};
    margin: 0 auto;
    margin-top: 2rem;

    th,
    td {
      text-align: left;
      padding: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.yellow};
    }

    th {
      background-color: ${(props) => props.theme.colors.eden};
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
    }

    @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
      font-size: ${(props) => props.theme.fontSize.sm};

      th,
      td {
        padding: 0.3rem;
      }
    }
  }
`;

