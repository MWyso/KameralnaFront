import React, {useEffect, useState} from "react";
import {MapEntity} from "types";
import {apiUrl} from "../../config/api";

interface Props {

    id: string;
}

export const SingleAd = (props: Props) => {
    const [ad, setAd] = useState<MapEntity | null>(null);

    useEffect(() => {
        (async () => {

            const res = await fetch(`${apiUrl}/map/${props.id}`);
            const data = await res.json();
            console.log(data);

            setAd(data);

        })();
    }, [props.id]);

    if (ad === null) {
        return <p>Wczytywanie...</p>
    }

    return <>

        <h2>{ad.name}</h2>
        <p>{ad.address}</p>
        <p>{ad.city}</p>
        <p><b>{ad.phone}</b></p>
        <hr/>
        <h2>Godziny otwarcia:</h2>
        <p>[Pon]:   {ad.monday}</p>
        <p>[Wt-Czw]:    {ad.tuesThurs}</p>
        <p>[Pt-Sob]:    {ad.friSat}</p>
        <p>[Nd]:    {ad.sun}</p>
    </>;

}