import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/kameralna-home.png';


export const Home = () => {
    return (
        <Wrapper id="about-us">
            <div className="main">
                <h2>O nas</h2>
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
                        <img className="info-img" src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

//AI

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;
  width: 100%;

  h2 {
    font-size: ${(props) => props.theme.fontSize.xxl};
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
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 2rem;
  }

  .info-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding-right: 2rem;

    h1 {
      font-size: ${(props) => props.theme.fontSize.xxl};
      margin-bottom: 1rem;
      text-align: center;
    }

    .about-txt {
      font-size: ${(props) => props.theme.fontSize.md};
      margin-bottom: 1.5rem;
      text-align: justify;
      line-height: 1.6rem;
    }
  }

  .info-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

    img {
      width: 90%;
      max-width: 500px;
    }
  }

  .info-sm {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 4rem;
    font-size: ${(props) => props.theme.fontSize.xl};

    .top {
      margin-right: 1.5rem;
      color: ${(props) => props.theme.colors.blue};
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.colors.eden};
      }
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    .container {
      width: 95%;
      height: auto;
      padding: 1rem;
    }

    .info-txt {
      width: 100%;
      padding-right: 0;
    }

    .info-img {
      width: 100%;

      img {
        width: 70%;
      }
    }
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) and (max-width: ${props => props.theme.breakpoints.md}) {
.container {
width: 95%;
height: auto;
padding: 1rem;
}
.info-txt {
  width: 100%;
  padding-right: 0;
}

.info-img {
  width: 100%;

  img {
    width: 60%;
  }
}
@media only screen and (min-width: ${props => props.theme.breakpoints.md}) and (max-width: ${props => props.theme.breakpoints.lg}) {
.container {
width: 90%;
height: auto;
padding: 0.5rem;
}
.info-txt {
  width: 60%;
  padding-right: 2rem;
}

.info-img {
  width: 40%;

  img {
    width: 90%;
    max-width: 500px;
  }
}
@media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
.container {
width: 90%;
height: auto;
padding: 2rem;
}
.info-txt {
  width: 50%;
  padding-right: 2rem;
}

.info-img {
  width: 50%;

  img {
    width: 90%;
    max-width: 500px;
  }
}
`;






