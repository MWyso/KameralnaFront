import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Main} from "./views/Main";
import {Theme} from "./components/Theme";


export const App = () => {

    return (
        <Theme>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </Theme>
    );
}
