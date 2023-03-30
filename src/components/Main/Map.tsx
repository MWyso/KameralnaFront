import React, {useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {SimpleMapEntity} from 'types';
import {apiUrl} from "../../config/api";
import '../../utils/fix-map-icon'
import 'leaflet/dist/leaflet.css';
import {SingleAd} from "../Map/SingleAd";
import styled from "styled-components";
import {Link} from 'react-router-dom';

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
            <br/>
            <div className="info-sm">
            <Link to="https://www.facebook.com/kameralnajastrzebie" className="top" title="Facebook">
                <i className="bx bxl-facebook-square"/>
            </Link>
            <Link to="https://www.instagram.com/kameralnajastrzebie/" className="top" title="Instagram">
                <i className="bx bxl-instagram-alt"/>
            </Link>
            </div>
            <MapContainer
                center={[49.9512067, 18.5723876]} zoom={10}>
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
  height: calc(60vh - 3.1rem);
  width: 50%;
  
  
  .leaflet-container {
    height: 60%
  }
  
  h2 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    margin-bottom: 1rem;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 2px;
    font-family: 'Amatic SC', cursive;
    color: ${(props) => props.theme.colors.yellow}
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

//GPT 2 szansa

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
//
//     <MapWrapper id="find-us">
//         <h2 id="find-us">Znajdziesz nas tutaj</h2>
//         <br/>
//         <div className="info-sm">
//             <Link to="https://www.facebook.com/kameralnajastrzebie" className="top" title="Facebook">
//                 <i className="bx bxl-facebook-square"/>
//             </Link>
//             <Link to="https://www.instagram.com/kameralnajastrzebie/" className="top" title="Instagram">
//                 <i className="bx bxl-instagram-alt"/>
//             </Link>
//         </div>
//         <MapContainer center={[49.9512067, 18.5723876]} zoom={10}>
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
//             />
//             {
//                 maps.map(map => (
//                     <Marker key={map.id} position={[map.lat, map.lon]}>
//                         <Popup>
//                             <SingleAd id={map.id}/>
//                         </Popup>
//                     </Marker>
//                 ))
//             }
//         </MapContainer>
//     </MapWrapper>
//
// )
//     ;
// };
//
// const MapWrapper = styled.div`
//   height: calc(80vh - .1rem);
//   width: 50%;
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
//
//   &::before {
//     content: '';
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     background-color: ${(props) => props.theme.colors.eden};
//
//   }
//
//   .info-sm {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     width: 100%;
//     height: 4rem;
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
//   .leaflet-container {
//     height: 50%
//   }
//
//   .leaflet-marker-icon,
//   .leaflet-marker-shadow {
//     border-radius: 60%;
//   }
//
//   .leaflet-popup-content {
//     padding: 5px;
//     font-size: 13px;
//     line-height: 1.5;
//     font-weight: 500;
//     max-width: 300px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//
//     & > * {
//       margin-bottom: 6px;
//     }
//
//     & > img {
//       height: 120px;
//       width: auto;
//       border-radius: 8px;
//       object-fit: cover;
//     }
//
//     & > a {
//       font-weight: bold;
//       color: #0070f3;
//       text-decoration: none;
//       transition: color 0.2s;
//
//       &:hover {
//         color: #0047b3;
//       }
//     }
// `;

