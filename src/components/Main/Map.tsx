// import React, {useEffect, useState} from 'react';
// import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
// import {SimpleMapEntity} from 'types';
// import {apiUrl} from "../../config/api";
// import '../../utils/fix-map-icon'
// import 'leaflet/dist/leaflet.css';
// import {SingleAd} from "../Map/SingleAd";
// import styled from "styled-components";
// import {Link} from 'react-router-dom';
//
// export const Map = () => {
//     const [maps, setMaps] = useState<SimpleMapEntity[]>([]);
//
//     useEffect(() => {
//         (async () => {
//
//             const res = await fetch(`${apiUrl}/map`);
//             const data = await res.json();
//
//
//             setMaps(data);
//
//         })();
//     }, []);
//
//     return (
//
//         <MapWrapper>
//             <h2 id="find-us">Znajdziesz nas tutaj</h2>
//             <br/>
//             <div className="info-sm">
//             <Link to="https://www.facebook.com/kameralnajastrzebie" className="top" title="Facebook">
//                 <i className="bx bxl-facebook-square"/>
//             </Link>
//             <Link to="https://www.instagram.com/kameralnajastrzebie/" className="top" title="Instagram">
//                 <i className="bx bxl-instagram-alt"/>
//             </Link>
//             </div>
//             <MapContainer
//                 center={[49.9512067, 18.5723876]} zoom={10}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
//                 />
//                 {
//                     maps.map(map => (
//                         <Marker key={map.id} position={[map.lat, map.lon]}>
//                             <Popup>
//                                 <SingleAd id={map.id}/>
//                             </Popup>
//                         </Marker>
//                     ))
//                 }
//             </MapContainer>
//         </MapWrapper>
//
//     );
// };
//
// const MapWrapper = styled.div`
//   height: calc(60vh - 3.1rem);
//   width: 50%;
//
//
//   .leaflet-container {
//     height: 73%
//   }
//
//   h2 {
//     font-size: ${(props) => props.theme.fontSize.xxl};
//     margin-bottom: 1rem;
//     text-align: center;
//     text-decoration: underline;
//     padding-bottom: 2px;
//     font-family: 'Amatic SC', cursive;
//     color: ${(props) => props.theme.colors.yellow}
//   }
//   .info-sm {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 3rem;
//
//     font-size: ${(props) => props.theme.fontSize.xl};
//
//     .top {
//       margin-right: 1.5rem;
//       color: ${(props) => props.theme.colors.blue};
//       transition: color 0.3s ease-in-out;
//
//       &:hover {
//         color: ${(props) => props.theme.colors.eden};
//       }
//     }
//   }
//
// `;
//
//

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { SimpleMapEntity } from 'types';
import { apiUrl } from '../../config/api';
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import { SingleAd } from '../Map/SingleAd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <MapWrapper>
            <h2 id="find-us">Znajdziesz nas tutaj</h2>
            <div className="info-sm">
                <Link to="https://www.facebook.com/kameralnajastrzebie" className="top" title="Facebook">
                    <i className="bx bxl-facebook-square" />
                </Link>
                <Link to="https://www.instagram.com/kameralnajastrzebie/" className="top" title="Instagram">
                    <i className="bx bxl-instagram-alt" />
                </Link>
            </div>
            <MapContainer center={[49.9512067, 18.5723876]} zoom={10}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {maps.map((map) => (
                    <Marker key={map.id} position={[map.lat, map.lon]}>
                        <Popup>
                            <SingleAd id={map.id} />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </MapWrapper>
    );
};

const MapWrapper = styled.div`
  height: calc(60vh - 3.1rem);
  width: 100%;
  background-color: ${(props) => props.theme.colors.eden};
  display: flex;
  flex-direction: column;
  align-items: center;

  .leaflet-container {
    width: 60%;
    height: 60vh;
    margin-top: 2rem;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 2px;
    font-family: 'Amatic SC', cursive;
    color: ${(props) => props.theme.colors.yellow};
  }

  .info-sm {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;

    font-size: ${(props) => props.theme.fontSize.xl};

    .top {
      margin-right: 1.5rem;
      color: ${(props) => props.theme.colors.blue};
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.colors.eden};
      }
    }
  }
`;

