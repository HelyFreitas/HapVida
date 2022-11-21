import { HeaderSecond } from "../../components/HeaderSecond";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";
import * as C from "./styles";

import PlansBack from "../../assets/plansempoyesback.png";
import { Cards } from "../../components/Cards";
import { CardProvider } from "../../components/CardProvider";
import { Footer } from "../../components/Footer";

export const PlansEmployes = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={PlansBack}
        title="Planos para Pequenas e Médias Empresas"
        paragraph="Conte com benefícios exclusivos para saúde  dos seus colaboradores."
        link="/plans"
      />
      <C.CardsContainer>
        <Cards title="Hapvida + NotreDame juntas oferecem:" />
      </C.CardsContainer>
      <C.CardsProviders>
        <C.AlignContent>
          <CardProvider
            subtitle="Soluções"
            title="Hapvida"
            paragraph="Selecione uma opção"
            link1="Saúde"
            link2="Odonto"
          />
          <CardProvider
            subtitle="Soluções"
            title="NDI"
            paragraph="Selecione uma opção"
            link1="Saúde"
            link2="Odonto"
          />
        </C.AlignContent>
      </C.CardsProviders>
      <Footer />
    </C.Container>
  );
};
