import React, {FormEvent, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {apiUrl} from "../../../config/api";
import styled from "styled-components";

export const AdminAdd = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (res.status === 400 || res.status === 500) {
                const error = await res.json();
                alert(`Error occurred: ${error.message}`);
                return;
            }
            navigate('/admin');
        } finally {
            setLoading(false);
        }

    };

    if (loading) {
        return (
            <p>Wczytywanie...</p>
        )
    }


    return (
        <Container>
            <div className="wrapper">
            <h1>Dodaj nowego administratora</h1>
            <br/>
            <form onSubmit={sendForm}>
                <div className="input-box">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={e => updateForm('email', e.target.value)}
                />
                <label>E-mail</label>
                </div>
                <br/>
                <div className="input-box">
                <input
                    type="password"
                    placeholder="Set Password"
                    value={form.password}
                    onChange={e => updateForm('password', e.target.value)}
                />
                <label>Hasło</label>
                </div>
                <br/>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                    <label>Imię</label>
                </div>
                <br/>
                <button type="submit">Register</button>

            </form>
        </div>
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