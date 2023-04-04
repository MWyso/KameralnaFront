import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Main} from "./views/Main";
import {Theme} from "./components/Theme";
import {LoginView} from "./views/Login";
import {AdminPanel} from "./views/AdminPanel";


export const App = () => {

    return (
        <Theme>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<LoginView/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </Theme>
    );
}
