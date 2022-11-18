import { HeaderSecond } from "../../components/HeaderSecond";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";
import * as C from "./styles";

import WorksBack from "../../assets/work-with-us.png";
import { ArrowCircleUpRight } from "phosphor-react";
import { Footer } from "../../components/Footer";

export const WorkWithUs = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={WorksBack}
        title="Trabalhe conosco"
        paragraph="Venha crescer com a gente! Confira todas as nossas vagas disponíveis."
        link="/"
      />
      <C.Content1>
        <C.AlignContent>
          <C.Title>Selecione uma das opções:</C.Title>
          <C.Cards>
            <C.Card>
              <C.Texts>
                <C.SubTitleCard>Oportunidades</C.SubTitleCard>
                <C.TitleCard>Hapvida</C.TitleCard>
              </C.Texts>
              <C.BtnCard>
                <ArrowCircleUpRight size={32} color="#0054b8" weight="fill" />
              </C.BtnCard>
            </C.Card>
            <C.Card>
              <C.Texts>
                <C.SubTitleCard>Oportunidades</C.SubTitleCard>
                <C.TitleCard>NDI</C.TitleCard>
              </C.Texts>
              <C.BtnCard>
                <ArrowCircleUpRight size={32} color="#0054b8" weight="fill" />
              </C.BtnCard>
            </C.Card>
          </C.Cards>
        </C.AlignContent>
      </C.Content1>
      <Footer />
    </C.Container>
  );
};
