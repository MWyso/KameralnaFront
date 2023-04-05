import {ThemeProvider} from "styled-components";
import { ReactNode } from 'react';


export const theme = {
    colors: {
        eden: '#125B50',
        yellow: '#F8B400',
        blue: '#164ecb',
        cream: '#FAF5E4',
        gray: '#868383',
        red: '#FF6363',

    },
    fontSize: {
        sm: '1.2rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xl2: '3rem',
    },
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
};

interface Props {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
