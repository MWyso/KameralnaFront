import React, {FormEvent, useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {apiUrl} from "../config/api";

export const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const Login = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/login/${email}/${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            });


            // console.log(res.status);

            if (res.status === 400 || res.status === 500) {
                const error = await res.json();
                alert(`Error occurred: ${error.message}`);
                return;
            }
            if (res.status === 200) {

                navigate('/admin');
            }
        } finally {
            setLoading(false);
        }


    };

    if (loading) {
        return (
           <p>Wait...</p>
        )
    };

    return (
        <Container>
        <div className="wrapper">
            <h1>Login</h1>
            <br/>
            <form onSubmit={Login}>

               <div className="input-box">
                   <input
                       type="email"
                       id="email"
                       placeholder="Your Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                   />
                   <label htmlFor="email">E-mail</label>
               </div>
                <br/>
                <div className="input-box">
                    <input
                        type="password"
                        id="password"
                        placeholder="******"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Hasło</label>
                </div>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
            <NavLink to="/">
                <i className="bx bx-x" />
            </NavLink>
        </Container>

    )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.eden};

    .bx-x {
        position: absolute;
        top: 1rem;
        left: 1rem;
        color: ${(props) => props.theme.colors.cream};
        font-size: ${(props) => props.theme.fontSize.xl2};
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${(props) => props.theme.colors.eden};
        padding: 2rem 3rem;

        h1 {
            font-size: ${(props) => props.theme.fontSize.lg};
            margin-bottom: 2rem;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;