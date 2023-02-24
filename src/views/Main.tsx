import {Header} from "../components/Headers/Header";
import styled from "styled-components";


export const Main = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;