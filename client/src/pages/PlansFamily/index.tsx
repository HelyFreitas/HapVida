import { HeaderSecond } from "../../components/HeaderSecond";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";
import * as C from "./styles";

import Background from "../../assets/plansfamilyback.png";
import { Cards } from "../../components/Cards";
import { CardsProviders } from "../PlansEmployes/styles";
import { CardProvider } from "../../components/CardProvider";
import { CardsPlans2 } from "../../components/CardsPlans2";
import { CardsPlans3 } from "../../components/CardsPlans3";
import { CardsPlansNdi } from "../../components/CardsPlansNdi";
import { Footer } from "../../components/Footer";

export const PlansFamily = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={Background}
        title="Planos Individuais e Familiares"
        paragraph="Compartilhe saúde com quem você mais ama."
        link="/plans"
      />
      <C.CardsContainer>
        <Cards title="Hapvida + NotreDame juntas oferecem: " />
      </C.CardsContainer>
      <C.CardsPlansContainer>
        <C.AlignContent>
          <CardsPlans2
            subtitle1="Soluções"
            title1="Hapvida"
            paragraph="Selecione uma opção"
            link1=""
            linktext1="Contrate Online"
            link2=""
            linktext2="+Odonto"
          />
          <CardsPlans3
            subtitle1="Soluções"
            title1="NDI São Paulo"
            paragraph="Selecione uma opção"
            link1=""
            linktext1="Notrelife"
            link2=""
            linktext2="Saúde Individual"
            link3=""
            linktext3="Interodonto"
          />
        </C.AlignContent>
      </C.CardsPlansContainer>
      <C.CardsPlansNdiContainer>
          <CardsPlansNdi
            subtitlefirstcard="Soluções"
            titlefirstcard="NDI Minas"
            subtitlesecondcard="Soluções"
            titlesecondcard="NDI Sul"
          />
      </C.CardsPlansNdiContainer>
      <Footer />
    </C.Container>
  );
};
