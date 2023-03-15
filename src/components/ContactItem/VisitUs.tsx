import React from 'react';
import { InfoEntity } from 'types';

interface Props {
    info: InfoEntity;
}

export const VisitUs = (props: Props) => {
    return (
        <>
            <p>
                ul.{props.info.street} {props.info.number}
            </p>
            <p>
                {props.info.zipCode} {props.info.city}
            </p>
        </>
    );
};
