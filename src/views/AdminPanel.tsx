import React, {useState} from 'react';
import {AdminHeader} from "../components/Headers/AdminHeader";
import styled from "styled-components";

export const AdminPanel = () => {
    const [userData, setUserData] = useState({
        id: '',
        name: '',
    });

    return (
        <Wrapper>
            <AdminHeader id={userData.id}/>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;