// import React from 'react';
// import { MenuEntity } from 'types';
// import {ItemDelete} from "./ItemDelete";
// import styled, { ThemeProvider } from "styled-components";
// import {theme} from "../../Theme";
//
// interface Props {
//     itemEditTable: MenuEntity[];
//     onItemChange: () => void;
// }
//
// export const ItemEditTable = (props: Props) => (
//     <ThemeProvider theme={theme}>
//         <StyledTable>
//             <thead>
//             <tr>
//                 <StyledTh>Danie główne</StyledTh>
//                 <StyledTh>Dodatki</StyledTh>
//                 <StyledTh>Cena</StyledTh>
//                 <StyledTh>Usuń</StyledTh>
//             </tr>
//             </thead>
//             <tbody>
//         {
//             props.itemEditTable.map(menu => (
//                 <ItemDelete item={menu} key={menu.id} onItemChange={props.onItemChange}/>
//             ))
//         }
//             </tbody>
//         </StyledTable>
//     </ThemeProvider>
// );
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
import { MenuEntity } from 'types';
import {ItemDelete} from "./ItemDelete";
import styled, { ThemeProvider } from "styled-components";
import {theme} from "../../Theme";

interface Props {
    itemEditTable: MenuEntity[];
    onItemChange: () => void;
}

export const ItemEditTable = (props: Props) => (
    <Wrapper>
        <table>
            <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                props.itemEditTable.map(menu => (
                    <ItemDelete item={menu} key={menu.id} onItemChange={props.onItemChange}/>
                ))
            }
            </tbody>
        </table>
    </Wrapper>
);

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
      background-color: ${(props) => props.theme.colors.white};
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
