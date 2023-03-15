import React from 'react';
import { InfoEntity } from 'types';


interface Props {
    info: InfoEntity;
}

export const ContactUs = (props: Props) => {
    return (
        <>
            <p>{props.info.phone}</p>
            <p>{props.info.email}</p>
        </>
    );
};
