import React from 'react';
import { MenuEntity } from 'types';
import {MenuItem} from "./MenuItem";

interface Props {
    menuTable: MenuEntity[];
}

export const MenuTable = (props: Props) => (
    <table>
        <thead>
        <tr>
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