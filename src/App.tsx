import React from 'react';
import {Navigate ,Route, Routes } from 'react-router-dom';
import {Main} from "./views/Main";
import {Theme} from "./components/Theme";
import {LoginView} from "./views/Login";
import {AdminPanel} from "./views/AdminPanel";
import styled from "styled-components";


export const App = () => {

    return (
        <Theme>
            <Container>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/login" element={<LoginView/>}/>
                    <Route path="/admin" element={<AdminPanel/>}/>
                    <Route path="*" element={<Navigate to={''} />} />
                </Routes>
            </Container>
        </Theme>
    );
}

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;
