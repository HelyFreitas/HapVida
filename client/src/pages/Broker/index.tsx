import { HeaderSecond } from "../../components/HeaderSecond";

import BackHeader from "../../assets/prestadoresback.png";

import * as C from "./styles";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import { Footer } from "../../components/Footer";
import { NavbarTop } from "../../components/NavbarTop";
import { NavbarBottom } from "../../components/NavbarBottom";
import { DropdownBtn } from "../../components/DropdownBtn";
import { CardsPlans2 } from "../../components/CardsPlans2";
import { CardsPlans3 } from "../../components/CardsPlans3";

export const Broker = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={BackHeader}
        title="Prestadores"
        paragraph="Aqui você encontra os acessos para os portais do grupo e pode também consultar documentos importantes."
        link="/"
      />
      <C.Content1>
        <C.AlignContent>
          <C.TitleContent>Selecione uma das opções:</C.TitleContent>
          <C.CardsContent>
            <CardsPlans3
              subtitle1="Prestador"
              title1="Hapvida"
              paragraph=""
              link1=""
              linktext1="Portal do Odonto"
              link2=""
              linktext2="SAVI"
              link3=""
              linktext3="Rede Própria"
            />
            <CardsPlans2
              subtitle1="Prestador"
              title1="NDI"
              paragraph=""
              link1=""
              linktext1="Odonto"
              link2=""
              linktext2="Saúde"
            />
          </C.CardsContent>
        </C.AlignContent>
      </C.Content1>
      <Footer />
    </C.Container>
  );
};
