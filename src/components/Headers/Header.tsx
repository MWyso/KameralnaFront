import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../assets/images/logo3.png';


export const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Container isActive={navbar}>
            <div className="wrapper">
                <NavHashLink smooth to="/#">
                    <img className="logo" src={logo} alt="logo" />
                </NavHashLink>
                <ul>
                    <NavHashLink
                        smooth to="#about-us" className="li">
                        O nas
                    </NavHashLink>
                    <NavHashLink
                        smooth to="/#menu" className="li">
                        Menu
                    </NavHashLink>
                    <NavHashLink
                        smooth to="/#lunch" className="li">
                        Lunch
                    </NavHashLink>
                    <NavHashLink
                        smooth to="/#find-us" className="li">
                        Znajdziesz nas
                    </NavHashLink>
                    <NavHashLink
                        smooth to="/#contact" className="li">
                        Kontakt
                    </NavHashLink>
                </ul>
                <div className="info-sm">
                    <Link to="" className="top" title="Facebook">
                        <i className="bx bxl-facebook-square" />
                    </Link>
                    <Link to="" className="top" title="Instagram">
                        <i className="bx bxl-instagram-alt" />
                    </Link>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section<{ isActive: boolean }>`
  position: fixed;
  z-index: 10;
  padding: 1rem 0;
  width: 100%;
  background-color: ${(props) =>
          props.isActive ? props.theme.colors.eden : ''};
  display: flex;
  justify-content: center;

  .wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 6rem;
      cursor: pointer;
    }
  
    ul {
      display: flex;
      text-decoration: none;

      .li {
        cursor: pointer;
        font-weight: 500;
        position: relative;
        text-decoration: none;
      }

      .li:not(:last-child) {
        margin-right: 1rem;
      }

      .info-sm {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${(props) => props.theme.fontSize.lg};
        z-index: 1;

        .top {
          z-index: 1;
          cursor: pointer;
    }
`;