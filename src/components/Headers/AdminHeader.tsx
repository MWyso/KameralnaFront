import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from '../../assets/images/logo3.png';
import {Outlet} from "@styled-icons/bootstrap";
import {NavHashLink} from "react-router-hash-link";

type Id = {
    id: string;
}


export const AdminHeader = (id: Id) => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY > 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    const [loading, setLoading] = useState<boolean>(false);
    const logOut = async () => {
        setLoading(true);
        try {
            await fetch(`http://localhost:3001/login/${id}`);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <p>Wait...</p>
        )

    }

    return (
        <Container isActive={navbar}>
            <div className="wrapper">
            <Link to={`/`}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <ul>
                <NavHashLink
                    smooth to="#add-admin" className="li">
                    Dodaj Administratora
                </NavHashLink>
                <NavHashLink
                    smooth to="#edit-menu" className="li">
                    Edytuj Menu
                </NavHashLink>
                <NavHashLink
                    smooth to="#edit-info" className="li">
                    Edytuj Info
                </NavHashLink>
            </ul>
            <div className="path">
                <Link to="/login" onClick={logOut}>Wyloguj</Link>
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
  text-decoration: none;

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