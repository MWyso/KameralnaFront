import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Main} from "./views/Main";
import {Theme} from "./components/Theme";
import {PREFIX} from "./config";

export const App = () => {

    return (
        <Theme>
            <Routes>
                <Route path={`${PREFIX}/`} element={<Main/>}/>
            </Routes>
        </Theme>
    );
}
