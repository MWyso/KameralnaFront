import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from '../../assets/images/logo3.png';
import {Outlet} from "@styled-icons/bootstrap";
import {NavHashLink} from "react-router-hash-link";
import {apiUrl} from "../../config/api";
import {useMediaQuery} from "react-responsive";

type Id = {
    id: string;
}


export const AdminHeader = (id: Id) => {
    const [navbar, setNavbar] = useState(false);
    const isMobile = useMediaQuery({maxWidth: 768});

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
        <Container isActive={navbar} isMobile={isMobile}>
            <Wrapper>
                <LogoWrapper>
                    <NavHashLink smooth to="#add-admin">
                        <Logo src={logo} alt="logo"/>
                    </NavHashLink>
                </LogoWrapper>
                {!isMobile && (
                    <MenuList>
                        <MenuItem>
                            <NavHashLink smooth to="#add-admin" className="li">
                                Dodaj Administratora
                            </NavHashLink>
                        </MenuItem>
                        <MenuItem>
                            <NavHashLink smooth to="#edit-menu" className="li">
                                Edytuj Menu
                            </NavHashLink>
                        </MenuItem>
                    </MenuList>
                )}
                <Link to="/login">
                    <Button>Wyloguj</Button>
                </Link>

            </Wrapper>
        </Container>
    );
};

const Container = styled.section<{ isActive: boolean, isMobile: boolean }>`
  position: fixed;
  z-index: 10;
  padding: 1rem 0;
  background-color: ${(props) =>
          props.isActive ? props.theme.colors.eden : ""};
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-family: "Amatic SC", cursive;

  ${(props) =>
          props.isMobile &&
          `
        height: 7vh;
    `}

  ${(props) =>
          !props.isMobile &&
          `
        max-height: 15vh;
        width: 100%;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin-bot: 5px;
  height: 5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 5rem;
  margin-right: 2rem;
  cursor: pointer;
`;


const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Amatic SC', cursive;
`;

const MenuItem = styled.li`
  margin: 0 2rem;

  a {
    color: ${({theme}) => theme.colors.yellow};
    cursor: pointer;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.gray};
    }

    &::after {
      content: " | ";
      margin-left: 5px;
      margin-right: 2px;
    }

    &:last-child {
      &::after {
        content: "";
      }
    }
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50px;
  border: none;
  color: white;
  font-size: ${(props) => props.theme.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.eden};
  }
`;

