import React, {useState} from 'react';
import {AdminHeader} from "../components/Headers/AdminHeader";
import styled from "styled-components";
import {AdminAdd} from "../components/AdminPanel/AdminAdd/AdminAdd";
import {ItemAdd} from "../components/AdminPanel/ItemEdit/ItemAdd";

export const AdminPanel = () => {
    const [userData, setUserData] = useState({
        id: '',
    });

    return (
        <Wrapper>
            <AdminHeader id={userData.id}/>
            <AdminAdd/>
           <ItemAdd/>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;