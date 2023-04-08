// import React, {FormEvent, useState} from "react";
// import {NavLink, useNavigate} from 'react-router-dom';
// import styled from "styled-components";
// import {apiUrl} from "../config/api";
// import bcrypt from 'bcryptjs';
//
// export const LoginView = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState<boolean>(false);
//
//     const Login = async (event: FormEvent) => {
//         event.preventDefault();
//         setLoading(true);
//
//         try {
//             const res = await fetch(`${apiUrl}/login/${email}/${password}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//
//             });
//             // console.log(res.status);
//
//             if (res.status === 400 || res.status === 500) {
//                 const error = await res.json();
//                 alert(`Error occurred: ${error.message}`);
//                 return;
//             }
//             if (res.status === 200) {
//
//                 navigate('/admin');
//             }
//         } finally {
//             setLoading(false);
//         }
//
//
//     };
//
//     if (loading) {
//         return (
//             <p>Wait...</p>
//         )
//     }
//     ;
//
//     return (
//         <Container>
//             <div className="wrapper">
//                 <h1>Login</h1>
//                 <br/>
//                 <form onSubmit={Login}>
//
//                     <div className="input-box">
//                         <input
//                             type="email"
//                             id="email"
//                             placeholder="Twój Email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                         <label htmlFor="email">E-mail</label>
//                     </div>
//                     <br/>
//                     <div className="input-box">
//                         <input
//                             type="password"
//                             id="password"
//                             placeholder="******"
//                             value={password}
//                             onChange={e => setPassword(e.target.value)}
//                         />
//                         <label htmlFor="password">Hasło</label>
//                     </div>
//                     <br/>
//                     <button type="submit">Login</button>
//                 </form>
//             </div>
//             <NavLink to="/">
//                 <i className="bx bx-x"/>
//             </NavLink>
//         </Container>
//
//     )
// }
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.colors.eden};
//
//   .bx-x {
//     position: absolute;
//     top: 1rem;
//     left: 1rem;
//     color: ${(props) => props.theme.colors.yellow};
//     font-size: ${(props) => props.theme.fontSize.xl2};
//   }
//
//   .wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: ${(props) => props.theme.colors.cream};
//     padding: 2rem 3rem;
//
//     h1 {
//       font-size: ${(props) => props.theme.fontSize.lg};
//       margin-bottom: 2rem;
//     }
//
// form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//
// .input-box {
//         position: relative;
//         margin-bottom: 20px;
//
//         input {
//             width: 100%;
//             font-size: ${(props) => props.theme.fontSize.base};
//             padding: 10px 0;
//             border: none;
//             border-bottom: 2px solid ${(props) => props.theme.colors.eden};
//             background-color: transparent;
//             color: ${(props) => props.theme.colors.eden};
//             margin-bottom: 5px;
//             outline: none;
//             transition: all 0.3s ease;
//
//         &:focus {
//                 border-bottom: 2px solid ${(props) => props.theme.colors.blue};
//             }
//
//         &:valid + label {
//                 top: -20px;
//                 left: 0;
//                 font-size: ${(props) => props.theme.fontSize.sm};
//                 color: ${(props) => props.theme.colors.blue};
//             }
//         }
//
//         label {
//             position: absolute;
//             top: 0;
//             left: 0;
//             font-size: ${(props) => props.theme.fontSize.base};
//             color: ${(props) => props.theme.colors.eden};
//             transition: all 0.3s ease;
//         }
//     }
// `;
//

import React, {FormEvent, useState} from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {apiUrl} from "../config/api";
import {RiCloseFill} from 'react-icons/ri';

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
    }
    ;

    return (
        <Container>
            <CloseLink to="/">
                <CloseIcon/>
            </CloseLink>
            <Wrapper>
                <h1>Login</h1>
                <form onSubmit={Login}>
                    <InputBox>
                        <input
                            type="email"
                            id="email"
                            placeholder="Twój Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">E-mail</label>
                    </InputBox>
                    <InputBox>
                        <input
                            type="password"
                            id="password"
                            placeholder="******"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Hasło</label>
                    </InputBox>
                    <Button type="submit">Login</Button>

                </form>
            </Wrapper>
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
`;

const CloseLink = styled(NavLink)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${(props) => props.theme.colors.yellow};
  font-size: ${(props) => props.theme.fontSize.xl2};
`;

const CloseIcon = styled(RiCloseFill)`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.cream};
  padding: 2rem 3rem;
  border-radius: 50px;
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.base};
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.eden};
    background-color: transparent;
    color: ${(props) => props.theme.colors.eden};
    margin-bottom: 5px;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      border-bottom: 2px solid ${(props) => props.theme.colors.blue};
    }

    &:valid + label {
      top: -20px;
      left: 0;
      font-size: ${(props) => props.theme.fontSize.sm};
      color: ${(props) => props.theme.colors.blue};
    }

  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.colors.eden};
    transition: all 0.3s ease;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50px;
  border: none;
  color: white;
  font-size: ${(props) => props.theme.fontSize.base};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.eden};
  }
`;
