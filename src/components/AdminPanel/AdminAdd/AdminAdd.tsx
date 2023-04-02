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
            <Container>
                <div>
                    <p><strong>{resultInfo}</strong></p>
                    <button onClick={() => setResultInfo(null)}>Dodaj klolejnego admina</button>
                </div>
            </Container>
        )
    }

    return (
        <Container id="add-admin">
            <div className="wrapper">
                <h1>Dodaj nowego administratora</h1>
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
        </Container>
    );
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


//     return (
//         <Container id="add-admin">
//             <div className="wrapper">
//                 <h1>Dodaj nowego administratora</h1>
//                 <br/>
//                 <form onSubmit={sendForm}>
//                     <div className="input-box">
//                         <input
//                             type="email"
//                             placeholder="Your Email"
//                             value={form.email}
//                             onChange={e => updateForm('email', e.target.value)}
//                         />
//                         <label>E-mail</label>
//                     </div>
//                     <br/>
//                     <div className="input-box">
//                         <input
//                             type="password"
//                             placeholder="Set Password"
//                             value={form.password}
//                             onChange={e => updateForm('password', e.target.value)}
//                         />
//                         <label>Hasło</label>
//                     </div>
//                     <br/>
//                     <div className="input-box">
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             value={form.name}
//                             onChange={e => updateForm('name', e.target.value)}
//                         />
//                         <label>Imię</label>
//                     </div>
//                     <br/>
//                     <button type="submit">Register</button>
//
//                     <AdminList/>
//
//                 </form>
//             </div>
//         </Container>
//     )
// }
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.colors.cream};
//
//   .wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: ${(props) => props.theme.colors.eden};
//     padding: 2rem 3rem;
//
//
//     h1 {
//       font-size: ${(props) => props.theme.fontSize.lg};
//       margin-bottom: 2rem;
//     }
//
//     form {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }
//   }
// `;