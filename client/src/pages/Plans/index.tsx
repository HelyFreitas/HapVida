import { Link } from "react-router-dom";
import { HeaderSecond } from "../../components/HeaderSecond";

import PlansBack from "../../assets/plansback.png";

import User from "../../assets/user.png";
import Home from "../../assets/home.png";
import Employer from "../../assets/employer.png";

import * as C from "./styles";
import { Form } from "../../components/Form";
import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";
import { ArrowCircleDownRight, ArrowCircleRight } from "phosphor-react";

export const Plans = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={PlansBack}
        title="Planos"
        paragraph="Encontre o plano ideal para você com melhor custo/benefício do mercado."
        link="/"
      />
      <C.Content1>
        <C.AlignContent>
          <C.Title>Escolha a melhor opção:</C.Title>
          <C.CardsContainer>
            <C.FirstCard>
              <C.FirstCardImg src={User} />
              <C.TitleFirstCard>
                Planos Individuais e Familiares
              </C.TitleFirstCard>
              <C.ParagraphFirstCard>
                Veja as soluções exclusivas para você e seus familiares.
              </C.ParagraphFirstCard>
              <C.FirstCardBtn href="/plans-family">
                <ArrowCircleRight color="#0054B8" weight="fill" size={28} />
              </C.FirstCardBtn>
            </C.FirstCard>
            <C.SecondCard>
              <C.SecondCardImg src={Home} />
              <C.TitleSecondCard>Planos PME</C.TitleSecondCard>
              <C.ParagraphSecondCard>
                Veja as soluções exclusivas para pequenas e médias empresas
              </C.ParagraphSecondCard>
              <C.SecondCardBtn href="/plans-employes">
                <ArrowCircleRight color="#0054B8" weight="fill" size={28} />
              </C.SecondCardBtn>
            </C.SecondCard>
            <C.ThirdCard>
              <C.ThirdCardImg src={Employer} />
              <C.TitleThirdCard>Planos Empresa</C.TitleThirdCard>
              <C.ParagraphThirdCard>
                Veja as soluções corporativas exclusivas
              </C.ParagraphThirdCard>
              <C.ThirdCardBtn href="/busines-plans">
                <ArrowCircleRight color="#0054B8" weight="fill" size={28} />
              </C.ThirdCardBtn>
            </C.ThirdCard>
          </C.CardsContainer>
        </C.AlignContent>
      </C.Content1>
      <Form
        title="Seja Cliente"
        paragraph="Planos para você e sua família."
        button="Realizar Cotação"
      />

      <hr className="row-hr" />

      <Cards title="Hapvida + NotreDame juntas oferecem:" />
      <Footer />
    </C.Container>
  );
};
