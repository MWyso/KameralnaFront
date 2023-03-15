import React, { useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {SimpleMapEntity} from 'types';
import {apiUrl} from "../../config/api";
import '../../utils/fix-map-icon'
import 'leaflet/dist/leaflet.css';
import {SingleAd} from "../Map/SingleAd";
import styled from "styled-components";

export const Map = () => {
    const [maps, setMaps] = useState<SimpleMapEntity[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`${apiUrl}/map`);
            const data = await res.json();


            setMaps(data);

        })();
    }, []);

    return (
        <MapWrapper id="find-us">
            <MapContainer center={[49.9512067,18.5723876]} zoom={10}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    maps.map(map => (
                        <Marker key={map.id} position={[map.lat, map.lon]}>
                            <Popup>
                                <SingleAd id={map.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </MapWrapper>
    );
};

const MapWrapper = styled.div`
  height: calc(100vh - 3.1rem);
  width: 50%;

  .leaflet-container {
    height: 50%
  }
`;