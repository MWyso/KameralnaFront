import React, {FormEvent, useState} from 'react';
import {MenuEntity, NewMenuEntity} from 'types';

import styled from "styled-components";
import {apiUrl} from "../../../config/api";
import {ItemEditList} from "./ItemEditList";

export const ItemAdd = () => {
    const [form, setForm] = useState<NewMenuEntity>({
        name: '',
        price: 0,
        description: "",

    });

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/menu`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: MenuEntity = await res.json();

            setLoading(false);
            setResultInfo(`${data.name} dodane pod ID ${data.id}`)

            setForm({
                name: '',
                price: 0,
                description: "",
            });

        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper id="edit-menu">
            <div className="main">
                {loading && <p>Wczytywanie...</p>}
                {resultInfo !== null ? (
                    <SuccessMessage>
                        <p>
                            <strong>{resultInfo}</strong>
                        </p>
                        <button onClick={() => setResultInfo(null)}>
                            Dodaj kolejne danie do menu.
                        </button>
                    </SuccessMessage>
                ) : (
                    <div className="container">
                        <div className="info-txt">
                        <h1>Dodaj danie do menu</h1>
                        <form onSubmit={sendForm}>
                            <InputBox>
                                <input
                                    type="text"
                                    placeholder="Nazwa"
                                    value={form.name}
                                    onChange={e => updateForm('name', e.target.value)}
                                />
                            </InputBox>
                            <InputBox>
                                <InputLabel>Opis</InputLabel>
                                <input
                                    type="text"
                                    placeholder="Opis"
                                    value={form.description}
                                    onChange={e => updateForm('description', e.target.value)}
                                />
                            </InputBox>
                            <InputBox>
                                <InputLabel>Cena</InputLabel>
                                <input
                                    type="number"
                                    placeholder="Cena"
                                    value={form.price}
                                    onChange={e => updateForm('price', e.target.value)}
                                />
                            </InputBox>
                            <SubmitButton type="submit">Dodaj</SubmitButton>
                        </form>

                        <ItemEditList/>

                    </div>
                    </div>
                )}
            </div>

        </Wrapper>
    );
}

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

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cream};
  padding: 2rem;
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


