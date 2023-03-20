import React from 'react';
import { MenuEntity } from 'types';
import {ContactUs} from "../ContactItem/ContactUs";
import {MenuItem} from "./MenuItem";

interface Props {
    menuTable: MenuEntity[];
}

export const MenuTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th></th>
            <th>Danie</th>
            <th>Opis</th>
            <th>Cena</th>
        </tr>
        </thead>
        <tbody>
        {
            props.menuTable.map(menu => (
                <MenuItem menuItem={menu} key={menu.id}/>
            ))
        }
        </tbody>
    </table>
);
//     <>
//         <p>
//             {
//                 props.menuTable.map(menu => (
//                     <MenuItem menu={menu} key={menu.id}/>
//                 ))
//             }
//         </p>
//     </>
//
// )