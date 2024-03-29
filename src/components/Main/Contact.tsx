import styled from 'styled-components';
import { ContactItem } from '../ContactItem/ContactItem';

export const Contact = () => {
    return (
        <Container id="contact">
            <div className="wrapper">
                <ContactItem icon="bx bxs-map-pin" name="ADRES:" />
                <ContactItem icon="bx bxs-phone" name="KONTAKT:" />
                <ContactItem icon="bx bxs-time" name="GODZINY OTWARCIA:" />
            </div>
        </Container>
    );
};

const Container = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.eden};
  display: flex;
  justify-content: center;

  .wrapper {
    width: 80%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    .wrapper {
      width: 60%;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    .wrapper {
      width: 90%;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    .wrapper {
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }
  }
`;
