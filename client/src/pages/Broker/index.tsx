import { HeaderSecond } from "../../components/HeaderSecond";

import BackHeader from "../../assets/prestadoresback.png";

import * as C from "./styles";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import { Footer } from "../../components/Footer";
import { NavbarTop } from "../../components/NavbarTop";
import { NavbarBottom } from "../../components/NavbarBottom";
import { DropdownBtn } from "../../components/DropdownBtn";

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
          <C.Cards>
            <C.Card1>
              <C.TextCard1>
                <C.SubtitleCard1>Prestador</C.SubtitleCard1>
                <C.TitleCard1>Hapvida</C.TitleCard1>
              </C.TextCard1>
              <C.LinksCard1>
                <Link to="" className="linkscards1">
                  Portal do Odonto&nbsp;
                  <ArrowUpRight />
                </Link>
                <Link to="" className="linkscards1">
                  SAVI&nbsp;
                  <ArrowUpRight />
                </Link>
                <Link to="" className="linkscards1">
                  Rede Própria&nbsp;
                  <ArrowUpRight />
                </Link>
              </C.LinksCard1>
            </C.Card1>
            <C.Card2>
              <C.TextCard2>
                <C.SubtitleCard2>Prestador</C.SubtitleCard2>
                <C.TitleCard2>NDI</C.TitleCard2>
              </C.TextCard2>
              <C.LinksCard2>
                <Link to="" className="linkscards2">
                  Odonto&nbsp;
                  <ArrowUpRight />
                </Link>
                <Link to="" className="linkscards2">
                  Saúde&nbsp;
                  <ArrowUpRight />
                </Link>
              </C.LinksCard2>
            </C.Card2>
          </C.Cards>
        </C.AlignContent>
      </C.Content1>
      <Footer />
    </C.Container>
  );
};
