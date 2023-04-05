import {Header} from "../components/Headers/Header";
import styled from "styled-components";
import {Contact} from "../components/Main/Contact";
import {Home} from "../components/Main/Home";
import {Map} from "../components/Main/Map";
import {Menu} from "../components/Main/Menu";


export const Main = () => {
    return (
        <Wrapper>
            <Header />
            <Home />
            <Map />
            <Menu />
            <Contact />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;




