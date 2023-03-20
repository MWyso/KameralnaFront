import React, {useEffect, useState} from 'react';
import { MenuEntity } from 'types';
import {apiUrl} from "../../config/api";
import styled from 'styled-components';
import logo2 from "../../assets/images/menu/logo2.png";

interface Props {
    menuItem: MenuEntity;
}

export const MenuItem = (props: Props) => {
    return (
        <tr>
            <td>Zdjęcie</td>
            <td>{props.menuItem.name}</td>
            <td>{props.menuItem.description}</td>
            <td>{props.menuItem.price} zł</td>
        </tr>
    );
};