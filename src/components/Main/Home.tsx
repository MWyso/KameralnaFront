import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/kameralna-home.png';


export const Home = () => {
    return (
        <Wrapper id="about-us">
            <Shape />
            <div className="main">
                <div className="container">
                    <div className="info-txt">
                        <h1>
                            Restauracja Kameralna
                        </h1>
                        <p className="about-txt">
                            Zapraszamy do Restauracji Kameralna,
                            nowego miejsca na mapie Jastrzębia-Zdroju.
                            Łączymy tradycję z nowoczesnością przy pomocy kuchni polskiej z elementami kuchni czeskiej.
                            Interesuje nas slow food, dlatego wysokiej jakości produkty
                            będą przygotowywane przez wyspecjalizowaną kadrę ze starannie dobranym menu koktajlowym.
                        </p>
                    </div>
                    <div className="info-img">
                        <img className="info-img" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="info-sm">
                    <Link to="" className="top" title="Facebook">
                        <i className="bx bxl-facebook-square" />
                    </Link>
                    <Link to="" className="top" title="Instagram">
                        <i className="bx bxl-instagram-alt" />
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

const Shape = styled.div`
    position: absolute;
    z-index: 0;
    width: 0;
    height: 0;
    right: 0;
    top: 0;
    border-bottom: 100vh solid ${(props) => props.theme.colors.eden};
    border-left: 25vw solid transparent;
    border-right: 50vw solid ${(props) => props.theme.colors.eden};
`;

const Wrapper = styled.section`
    width: 80%;
    margin: 1rem 1rem 0 1rem;

    .main {
        width: 100%;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: calc(100vh - 5rem);
            padding-top: 5rem;

            .info-txt {
                z-index: 1;
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h1 {
                    font-size: ${(props) => props.theme.fontSize.lg};
                    margin-bottom: 2rem;
                }

                .red-color {
                    color: ${(props) => props.theme.colors.red};
                }

                .about-txt {
                    margin-bottom: 4rem;
                    line-height: 2rem;
                }

                .wrapper {
                    display: flex;
                    justify-content: center;

                    @keyframes rock {
                        50% {
                            transform: translateY(-1rem);
                        }
                    }
                  
                }
            }

            .info-img {
                z-index: 1;
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;

                img {
                    width: 85%;
                }
            }
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
        }
    }

    @media only screen and (min-width: 2000px) {
        width: 60%;
    }

    @media only screen and (max-width: 1250px) {
        width: 90%;
    }

    @media only screen and (max-width: 800px) {
        .main {
            .container {
                flex-direction: column;
                justify-content: center;
                width: 100%;
                padding-top: 5rem;

                .info-txt {
                    width: 100%;

                    h1 {
                        margin-bottom: 1rem;
                    }

                    .about-txt {
                        margin-bottom: 2rem;
                        line-height: 2rem;
                    }

                    .wrapper {
                        .rock-mouse {
                            border: 2px solid
                                ${(props) => props.theme.colors.eden};
                        }

                        .rock-mouse::after {
                            background: ${(props) => props.theme.colors.eden};
                        }
                    }
                }

                .info-img {
                    width: 100%;
                    align-items: center;

                    img {
                        width: 70%;
                        padding-top: 2rem;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 700px) {
        .main {
            .container {
                .info-img {
                    img {
                        width: 90%;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 500px) {
        .main {
            .container {
                .info-txt {
                    h1 {
                        font-size: ${(props) => props.theme.fontSize.base};
                    }
                }
            }
        }
    }
`;
