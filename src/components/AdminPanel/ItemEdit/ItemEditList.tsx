import React, {useEffect, useState} from 'react';
import { MenuEntity } from 'types';
import {ItemEditTable} from "./ItemEditTable";
import {apiUrl} from "../../../config/api";


export const ItemEditList = () => {
    const [menuItem, setMenuItem] = useState<MenuEntity[] | null>(null);

    const refreshEditList = async () => {
        setMenuItem(null);
        const res = await fetch(`${apiUrl}/menu`);
        const data = await res.json();

        setMenuItem(data.menu);

    };

    useEffect(() => {
        refreshEditList();
    },[]);


    if (menuItem === null) {
        return <p>Wczytywanie...</p>

    }

    return <>
        <h1 id="menu">Menu</h1>
        <ItemEditTable itemEditTable={menuItem} onItemChange={refreshEditList}/>
    </>
};

