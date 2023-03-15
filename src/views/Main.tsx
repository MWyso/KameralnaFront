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
            <Contact />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;