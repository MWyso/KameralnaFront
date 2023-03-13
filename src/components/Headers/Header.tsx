import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../assets/images/logo3.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEventrixState } from 'eventrix';
// import { BasketEntity } from 'types';
import { PREFIX } from '../../config';





export const Header = () => {
    const [navbar, setNavbar] = useState(false);
    // const [basket] = useEventrixState<BasketEntity[]>('basket');

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
                <NavHashLink smooth to={PREFIX ? `${PREFIX}#` : `/#`}>
                    <img className="logo" src={logo} alt="logo" />
                </NavHashLink>
                <ul>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#about-us` : `/#about-us`}
                        className="li">
                        O nas
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#menu` : `/#menu`}
                        className="li">
                        Menu
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#lunch` : `/#lunch`}
                        className="li">
                        Lunch
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#find-us` : `/#find-us`}
                        className="li">
                        Znajdziesz nas
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#contact` : `/#contact`}
                        className="li">
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