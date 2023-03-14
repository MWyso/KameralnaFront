import React from 'react';
import { InfoEntity } from 'types';

interface Props {
    info: InfoEntity;
}

export const OpeningHours = (props: Props) => {
    return (
        <>
            <p>Poniedziałek: {props.info.monday}</p>
            <p>Wtorek: {props.info.tuesday}</p>
            <p>Środa: {props.info.wednesday}</p>
            <p>Czwartek: {props.info.thursday}</p>
            <p>Piątek: {props.info.friday}</p>
            <p>Sobota: {props.info.saturday}</p>
            <p>Niedziela: {props.info.sunday}</p>
        </>
    );
};