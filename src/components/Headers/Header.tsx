import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import logo from '../../assets/images/logo3.png';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
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
                        to={PREFIX ? `${PREFIX}#menu` : `/#menu`}
                        className="li">
                        Menu
                    </NavHashLink>
                    <NavHashLink
                        smooth
                        to={PREFIX ? `${PREFIX}#contact` : `/#contact`}
                        className="li">
                        Kontakt
                    </NavHashLink>
                </ul>
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
      z-index: 1;

      .li {
        cursor: pointer;
        font-weight: 500;
        position: relative;
      }

      .li:not(:last-child) {
        margin-right: 1rem;
      }
    }
`;