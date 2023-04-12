import React from "react";
import { MenuEntity } from "types";
import {apiUrl} from "../../../config/api";
import styled from "styled-components";

interface Props {
    item: MenuEntity;
    onItemChange: () => void;
}

export const ItemDelete = (props: Props) => {

    const deleteItem = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Are you sure you want to remove ${props.item.name}?`)){
            return;
        }

        const res = await fetch(`${apiUrl}/menu/${props.item.id}`, {
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

        <StyledRow>
                <StyledTd>{props.item.name}</StyledTd>
                <StyledTd>{props.item.description}</StyledTd>
                <StyledTd>{props.item.price.toFixed(2)}zł</StyledTd>
            <StyledTd>
                <a href="#"onClick={deleteItem} title="Usuń"><i className="bx bx-x" /></a>
            </StyledTd>
        </StyledRow>
    );
};


const StyledRow = styled.tr`
@media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        border: 1px solid ${({ theme }) => theme.colors.yellow};
border-radius: 5px;
padding: 1rem;
}

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;

    .bx-x {
      position: center;
      top: 1rem;
      left: 1rem;
      color: ${(props) => props.theme.colors.red};
      font-size: ${(props) => props.theme.fontSize.xl2};
    }


`;

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

