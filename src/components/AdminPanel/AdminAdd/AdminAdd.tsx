import React, {FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {UserEntity} from "types";
import {apiUrl} from "../../../config/api";
import {AdminList} from "./AdminList";
import bcrypt from "bcryptjs";

export const AdminAdd = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);
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
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(form.password, salt);

                const res = await fetch(`${apiUrl}/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: form.email,
                        password: hashedPassword,
                        name: form.name,
                    }),
                });


                if (res.status === 400 || res.status === 500) {
                const error = await res.json();
                alert(`Error occurred: ${error.message}`);
                return;
            }
            const data: UserEntity = await res.json();

            setLoading(false);
            setResultInfo(`${data.email} Dodany pod ID ${data.id}`)

            setForm({
                name: '',
                email: '',
                password: '',
            });

        } finally {
            setLoading(false);
        }

    };

    if (loading) {
        return (
            <p>Wczytywanie...</p>
        )
    }

    if (resultInfo !== null) {
        return (
            <Wrapper>
                <div>
                    <p><strong>{resultInfo}</strong></p>
                    <button onClick={() => setResultInfo(null)}>Dodaj klolejnego admina</button>
                </div>
            </Wrapper>
        )
    }

    return (
        <Wrapper id="add-admin">
            <div className="main">
                <h1>Dodaj nowego administratora</h1>
                <div className="container">
                    <div className="info-txt">
                <form onSubmit={sendForm}>
                    <InputBox>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={form.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                        />
                        <InputLabel>E-mail</InputLabel>
                    </InputBox>
                    <InputBox>
                        <input
                            type="password"
                            placeholder="*****"
                            value={form.password}
                            onChange={(e) => updateForm("password", e.target.value)}
                        />
                        <InputLabel>Hasło</InputLabel>
                    </InputBox>
                    <InputBox>
                        <input
                            type="text"
                            placeholder="Imię"
                            value={form.name}
                            onChange={(e) => updateForm("name", e.target.value)}
                        />
                        <InputLabel>Imię</InputLabel>
                    </InputBox>
                    <SubmitButton type="submit">Register</SubmitButton>
                </form>
                <AdminList />
            </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;
  width: 100%;

  h1 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    margin-bottom: 1rem;
    text-align: center;
  }

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

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    .wrapper {
      padding: 1rem;
    }

    h1 {
      font-size: ${(props) => props.theme.fontSize.md};
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    .wrapper {
      padding: 0.5rem;
    }

    h1 {
      font-size: ${(props) => props.theme.fontSize.sm};
      margin-bottom: 0.5rem;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.eden};
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1rem;
  font-size: ${(props) => props.theme.fontSize.md};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkEden};
  }
`;
