import React, {FormEvent, useState} from 'react';
import {MenuEntity, NewMenuEntity} from 'types';

import styled from "styled-components";
import {apiUrl} from "../../../config/api";
import {Menu} from "../../Main/Menu";
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
            const res = await fetch('http://localhost:3001/menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: MenuEntity = await res.json();

            setLoading(false);
            setResultInfo(`${data.name} dodane pod ID ${data.id}`)
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        <p>Wczytywanie...</p>
    }

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button onClick={() => setResultInfo(null)}>Dodaj kolejne danie do menu.</button>
        </div>
    }

    return (
        <Container id="edit-menu">
            <div className="wrapper">
                <h1>Dodaj danie do menu</h1>
                <br/>
                <form onSubmit={sendForm}>
                    <div className="input-box">
                        <input
                            type="text"
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                        />
                        <label>Danie </label>
                    </div>
                    <br/>
                    <div className="input-box">
                        <input
                            type="text"
                            value={form.description}
                            onChange={e => updateForm('description', e.target.value)}
                        />
                        <label>Opis </label>
                    </div>
                    <br/>
                    <div className="input-box">
                        <input
                            type="number"
                            value={form.price}
                            onChange={e => updateForm('price', e.target.value)}
                        />
                        <label>Cena</label>
                    </div>
                    <br/>
                    <button type="submit">Dodaj</button>
                </form>
                <br/>
                <ItemEditList/>
            </div>
        </Container>
    )
};

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