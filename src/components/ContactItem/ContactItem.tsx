import React from 'react';
import {useEffect, useState} from 'react';
import {apiUrl} from "../../config/api";
import {InfoEntity} from 'types';
import {VisitTable} from "./VisitTable";
import {ContactTable} from "./ContactTable";
import {OpeningTable} from "./OpeningTable";
import styled from 'styled-components';


interface Props {
    icon: string;
    name: string;
}

export const ContactItem = ({icon, name}: Props) => {
    const [contactList, setContactList] = useState<InfoEntity[] | null>(null);


    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/info`);
            const data = await res.json();

            setContactList(data.info);

        })();
    }, []);


    if (contactList === null) {
        return <p>Wczytywanie...</p>
    }

    return (

        <Container>

            <div className="top">
                <i className={icon}/>
            </div>
            <div className="center">{name}</div>
            <div className="bottom">

                {name === 'ADRES:' &&
                    (setContactList === null
                        ? (<p>Wczytywanie...</p>)
                        : (<VisitTable infoTable={contactList}
                            />
                        ))}
                {name === 'KONTAKT:' &&
                    (setContactList === null
                        ? (<p>Wczytywanie...</p>)
                        : (<ContactTable infoTable={contactList}
                            />
                        ))}
                {name === 'GODZINY OTWARCIA:' &&
                    (setContactList === null
                        ? (<p>Wczytywanie...</p>)
                        : (<OpeningTable infoTable={contactList}
                            />
                        ))}
            </div>
        </Container>
    )
};

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top {
    color: ${(props) => props.theme.colors.yellow};
    font-size: ${(props) => props.theme.fontSize.xl};
    margin-bottom: 0.8rem;
  }
  .center {
    color: ${(props) => props.theme.colors.cream};
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
  .bottom {
    color: ${(props) => props.theme.colors.cream};
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
