import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
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
                    <img className="logo" src={logo} alt="logo"/>
                    <br/>
                    <Link to={'/login'} style={{ color: 'black' }} className="li">Admin panel</Link>
                </NavHashLink>
                <ul>
                    <NavHashLink smooth to="#about-us" className="li">
                        O nas
                    </NavHashLink>
                    <NavHashLink smooth to="/#menu" className="li">
                        Menu
                    </NavHashLink>
                    <NavHashLink smooth to="/#lunch" className="li">
                        Lunch
                    </NavHashLink>
                    <NavHashLink smooth to="/#find-us" className="li">
                        Znajdziesz nas
                    </NavHashLink>
                    <NavHashLink smooth to="/#contact" className="li">
                        Kontakt
                    </NavHashLink>
                </ul>

                <div>
                    <Link to={'/basket'} style={{ fontSize: '2em', color: '#F8B400'}}>
                        <i className="bx bxs-cart-alt"></i>
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
  }
`;
