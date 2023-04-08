import React from "react";
import { UserEntity } from "types";
import {apiUrl} from "../../../config/api";
import styled from "styled-components";

interface Props {
    user: UserEntity;
    onItemChange: () => void;
}

export const AdminDelete = (props: Props) => {

    const deleteItem = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Are you sure you want to remove ${props.user.name}?`)){
            return;
        }

        const res = await fetch(`${apiUrl}/register/${props.user.id}`, {
            method: 'DELETE',
        });

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occurred: ${error.message}`)
            return;
        }

        props.onItemChange();

    };

    return (

        <tr>
            <StyledTd>{props.user.name}</StyledTd>
            <StyledTd>{props.user.email}</StyledTd>
            <StyledTd>
                <a href="#"onClick={deleteItem} title="Usuń"><i className="bx bx-x" /></a>
            </StyledTd>
        </tr>
    );
};


const StyledTd = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: white;
  padding: 1rem;

  .bx-x {
    position: center;
    top: 1rem;
    left: 1rem;
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSize.xl2};
  }
`;
