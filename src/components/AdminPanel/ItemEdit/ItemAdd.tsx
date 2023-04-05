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
        <Container id="edit-menu">
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
                <div className="wrapper">
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
                    <ItemEditList />
                </div>
            )}
        </Container>
    );
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
    background-color: ${(props) => props.theme.colors.cream};
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
