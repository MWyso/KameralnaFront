import React from 'react';
import {InfoEntity} from 'types';
import {ContactUs} from "./ContactUs";

interface Props {
    infoTable: InfoEntity[];
}

export const ContactTable = (props: Props) => (
    <>
        <p>
            {
                props.infoTable.map(info => (
                    <ContactUs info={info} key={info.id}/>
                ))
            }
        </p>
    </>

)