import { HeaderSecond } from "../../components/HeaderSecond";

import NoticesBack from "../../assets/noticesback.png";

import * as C from "./styles";
import { CardMedias } from "../../components/CardMedias";
import { ButtonMedias } from "../../components/ButtonMedias";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";

export const Notices = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={NoticesBack}
        title="Notícias"
        paragraph="Muita informação, novidades e conteúdos exclusivos."
        link="/"
      />
      <C.CardContainer>
        <C.PositionTitle>
          <C.Title>Todas as Notícias</C.Title>
        </C.PositionTitle>
        <C.FirstCards>
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
        </C.FirstCards>
        <C.SecondsCards>
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
          <CardMedias
            title="Desafio verão GNDI + Fit Anywhere"
            paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais..."
            date="12/09/2022"
          />
        </C.SecondsCards>
        <C.ButtonContainer>
          <ButtonMedias text={<CaretLeft size={20} color="#ccc" />} />
          <ButtonMedias text="1" />
          <ButtonMedias text="2" />
          <ButtonMedias text="3" />
          <ButtonMedias text="4" />
          <ButtonMedias text="..." />
          <ButtonMedias text="9" />
          <ButtonMedias text="10" />
          <ButtonMedias text={<CaretRight size={20} />} />
        </C.ButtonContainer>
      </C.CardContainer>
      <Form
        title="Receba notícias por e-mail"
        paragraph="Insira seus dados e fique bem informado."
        button="Receber notícias"
      />
      <Footer />
    </C.Container>
  );
};
