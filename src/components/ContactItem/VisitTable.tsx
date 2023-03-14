import React from 'react';
import {InfoEntity} from 'types';
import {VisitUs} from "./VisitUs";

interface Props {
    infoTable: InfoEntity[];
}

export const VisitTable = (props: Props) => (
    <>
        <p>
            {
                props.infoTable.map(info => (
                    <VisitUs info={info} key={info.id}/>
                ))
            }
        </p>
    </>

)

