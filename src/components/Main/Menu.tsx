import React, {useEffect, useState} from 'react';
import { MenuEntity } from 'types';
import {apiUrl} from "../../config/api";
import styled from 'styled-components';
import logo2 from "../../assets/images/menu/logo2.png";
import {MenuItem} from "../MenuItem/MenuItem";
import {MenuTable} from "../MenuItem/MenuTable";


export const Menu = () => {
    const [menuItem, setMenuItem] = useState<MenuEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/menu`);
            const data = await res.json();

            setMenuItem(data.menu);

        })();
    }, []);


    if (menuItem === null) {
        return <p>Wczytywanie...</p>

    }

    return <>
        <h1 id="menu">Menu</h1>
        <MenuTable menuTable={menuItem}/>
    </>
};

