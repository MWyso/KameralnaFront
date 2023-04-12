// import React, {useEffect, useState} from 'react';
// import {MenuEntity} from 'types';
// import {apiUrl} from "../../config/api";
// import {MenuTable} from "../MenuItem/MenuTable";
// import styled from "styled-components";
//
//
// export const Menu = () => {
//     const [menuItem, setMenuItem] = useState<MenuEntity[] | null>(null);
//
//     useEffect(() => {
//         (async () => {
//             const res = await fetch(`${apiUrl}/menu`);
//             const data = await res.json();
//
//             setMenuItem(data.menu);
//
//         })();
//     }, []);
//
//
//     if (menuItem === null) {
//         return <p>Wczytywanie...</p>
//
//     }
//
//     return (
//         <Wrapper id="menu">
//             <div className="main">
//                 <h2>Menu</h2>
//                 <div className="container">
//
//                 <MenuTable menuTable={menuItem}/>
//                 </div>
//             </div>
//         </Wrapper>
//     )
// };
//
// const Wrapper = styled.section`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   width: 100%;
//
//   h2 {
//     font-size: ${(props) => props.theme.fontSize.xxl};
//     align-items: center;
//     margin-bottom: 1rem;
//     text-align: center;
//     text-decoration: underline;
//     padding-bottom: 2px;
//     font-family: 'Amatic SC', cursive;
//     color: ${(props) => props.theme.colors.yellow}
//   }
//
//   &::before {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     background-color: ${(props) => props.theme.colors.eden};
//     clip-path: polygon(0 0, 0 100%, 100% 55%, 100% 0);
//   }
//
//   .container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     width: 90%;
//     max-width: 1100px;
//     height: 90%;
//     max-height: 700px;
//     background-color: ${(props) => props.theme.colors.eden};
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//     padding: 2rem;
//   }
//   .info-txt {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 60%;
//     padding-right: 2rem;
// `;
//

import React, { useEffect, useState } from 'react';
import { MenuEntity } from 'types';
import { apiUrl } from '../../config/api';
import { MenuTable } from '../MenuItem/MenuTable';
import styled from 'styled-components';

export const Menu = () => {
    const [menuItem, setMenuItem] = useState<MenuEntity[] | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/menu`);
            const data = await res.json();

            setMenuItem(data.menu);
        })();
    }, []);

    if (menuItem === null) {
        return <p>Wczytywanie...</p>;
    }

    return (
        <Wrapper id="menu">
            <div className="main">
                <h2>Menu</h2>
                <div className="container">
                    <MenuTable menuTable={menuItem} />
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  h2 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    align-items: center;
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 2px;
    font-family: 'Amatic SC', cursive;
    color: ${(props) => props.theme.colors.yellow};
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.eden};
    clip-path: polygon(0 0, 0 100%, 100% 55%, 100% 0);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1100px;
    height: 90%;
    max-height: 700px;
    background-color: ${(props) => props.theme.colors.eden};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    .container {
      padding: 1rem;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    h2 {
      font-size: ${(props) => props.theme.fontSize.xl};
      margin-top: 1rem;
    }

    .container {
      height: auto;
      padding: 1rem;
    }
  }
`;

