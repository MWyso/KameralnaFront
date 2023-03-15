import React from 'react';
import {InfoEntity} from 'types';
import {OpeningHours} from "./OpeningHours";

interface Props {
    infoTable: InfoEntity[];
}

export const OpeningTable = (props: Props) => (
    <>
        <p>
            {
                props.infoTable.map(info => (
                    <OpeningHours info={info} key={info.id}/>
                ))
            }
        </p>
    </>

)