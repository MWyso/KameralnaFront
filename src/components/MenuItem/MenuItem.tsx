import React from 'react';
import { MenuEntity } from 'types';

interface Props {
    menuItem: MenuEntity;
}

export const MenuItem = (props: Props) => {
    return (
        <tr>
            <td>{props.menuItem.name}</td>
            <td>{props.menuItem.description}</td>
            <td>{props.menuItem.price} zł</td>
        </tr>
    );
};