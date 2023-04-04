import React, {useEffect, useState} from 'react';
import { UserEntity } from 'types';
import {apiUrl} from "../../../config/api";
import { AdminListTable } from './AdminListTable';


export const AdminList = () => {
    const [adminList, setAdminList] = useState<UserEntity[] | null>(null);

    const refreshAdminList = async () => {
        setAdminList(null);
        const res = await fetch(`${apiUrl}/register`);
        const data = await res.json();

        setAdminList(data.user);

    };

    useEffect(() => {
        refreshAdminList();
    },[]);


    if (adminList === null) {
        return <p>Wczytywanie...</p>

    }

    return <>
        <h1 id="add-admin">Administratorzy</h1>
        <AdminListTable adminListTable={adminList} onItemChange={refreshAdminList}/>
    </>
};
