import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import logo from "../../assets/images/logo3.png";
import { useMediaQuery } from "react-responsive";

export const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    window.addEventListener("scroll", () => {
        setNavbar(window.scrollY > 0);
    });

    return (
        <Container isActive={navbar} isMobile={isMobile}>
            <Wrapper>
                <LogoWrapper>
                    <NavHashLink smooth to="#about-us">
                        <Logo src={logo} alt="logo" />
                    </NavHashLink>
                </LogoWrapper>
                {!isMobile && (
                    <MenuList>
                        <MenuItem>
                            <NavHashLink smooth to="#about-us">
                                O nas
                            </NavHashLink>
                        </MenuItem>
                        <MenuItem>
                            <NavHashLink smooth to="/#menu">
                                Menu
                            </NavHashLink>
                        </MenuItem>
                        <MenuItem>
                            <NavHashLink smooth to="/#find-us">
                                Znajdziesz nas
                            </NavHashLink>
                        </MenuItem>
                        <MenuItem>
                            <NavHashLink smooth to="/#contact">
                                Kontakt
                            </NavHashLink>
                        </MenuItem>
                    </MenuList>
                )}
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
  margin: 0 auto;
  height: 6rem;
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
    color: ${({ theme }) => theme.colors.yellow};
    cursor: pointer;
    font-weight: 500;
    position: relative;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.gray};
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





