import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from '../../assets/images/logo3.png';
import {Outlet} from "@styled-icons/bootstrap";
import {NavHashLink} from "react-router-hash-link";
import {apiUrl} from "../../config/api";

type Id = {
    id: string;
}


export const AdminHeader = (id: Id) => {
    const [navbar, setNavbar] = useState(false);

    window.addEventListener("scroll", () => {
        setNavbar(window.scrollY > 0);
    });

    const [loading, setLoading] = useState<boolean>(false);
    const logOut = async () => {
        setLoading(true);
        try {
            await fetch(`${apiUrl}/login/${id}`);
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
            </ul>
            <div className="path">
                <Link to="/login" onClick={logOut} style={{ color: 'black' }} className="li">Wyloguj</Link>
            </div>

            </div>
        </Container>
    );
};

const Container = styled.section<{ isActive: boolean }>`
  position: fixed;
  z-index: 10;
  padding: 2rem 0;
  width: 100%;
  background-color: ${(props) =>
          props.isActive ? props.theme.colors.cream : ''};
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-family: 'Amatic SC', cursive;


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
        color: ${(props) => props.theme.colors.yellow};
        cursor: pointer;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        font-size: 1.5rem;

        &:hover {
          //text-decoration: underline;
          color: ${(props) => props.theme.colors.gray};
        }
      }

      .li:not(:last-child)::after {
        content: " | ";
        margin-left: 5px;
        margin-right: 2px;
      }

      .li:not(:last-child) {
        margin-right: 1rem;
      }

      .top {
        z-index: 1;
        cursor: pointer;
      }
    }

    @media only screen and (min-width: 2000px) {
      .wrapper {
        width: 60%;
      }
    }

    @media only screen and (max-width: 1250px) {
      .wrapper {
        width: 90%;
      }
    }

    @media only screen and (max-width: 850px) {
      padding: 0.5rem 0;

      .wrapper {
        .logo {
          height: 3rem;
        }
      }
    }

    @media only screen and (max-width: 600px) {
      font-size: ${(props) => props.theme.fontSize.sm};

      .wrapper {
        ul {
          display: none;
        }
      }
    }
  }
`;

