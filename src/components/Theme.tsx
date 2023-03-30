import {ThemeProvider} from "styled-components";
import { ReactNode } from 'react';


export const theme = {
    colors: {
        eden: '#125B50',
        yellow: '#F8B400',
        cream: '#FAF5E4',
        gray: '#868383',
        red: '#FF6363',
        blue: '#164ecb',
    },
    fontSize: {
        sm: '1.2rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xl2: '3rem',
    },
};

interface Props {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
