import { HeaderSecond } from "../../components/HeaderSecond";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";
import * as C from "./styles";

import Background from "../../assets/businesplansback.png";
import Logo from "../../assets/logo1.png";
import MapHapvida from "../../assets/maphapvida.png";
import { VidMain } from "../../components/VidMain";
import { HapvidaNotredame } from "../../components/HapvidaNotredame";
import { Cards } from "../../components/Cards";
import { CardPrice } from "../../components/CardPrice";
import { PriceContent } from "../../components/PriceContent";
import SelectCommon from "../../components/SelectCommon";
import { Footer } from "../../components/Footer";

export const BusinesPlans = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={Background}
        title="Planos Empresariais"
        paragraph="Agora somos Hapvida e GNDI. Confira as vantagens dessa fusão para sua companhia."
        link="/plans"
      />
      <C.Content1>
        <C.AlignContent>
          <C.LogoContainer>
            <C.LogoImg src={Logo} />
          </C.LogoContainer>
          <C.TitleMapHapvida>
            A maior rede própria de atendimento do Brasil
          </C.TitleMapHapvida>
          <C.MapHapvidaContainer>
            <C.TextMapHapvida>
              Agora a Hapvida e a NDI (NotreDame Intermédica) estão juntas
              formando o maior sistema de saúde suplementar do Brasil! Essa
              união possibilita a integração de produtos, estruturas
              hospitalares, recursos e soluções. A Hapvida atua nas regiões
              Norte, Nordeste, Centro-Oeste e interior de São Paulo; enquanto a
              NDI atua fortemente nas regiões Sudeste e Sul. Assista ao vídeo e
              conheça a Solução nacional!
            </C.TextMapHapvida>
            <C.MapHapvidaImg src={MapHapvida} />
          </C.MapHapvidaContainer>
        </C.AlignContent>
      </C.Content1>
      <C.Hr />
      <C.Cont>
        <C.AlignContent>
          <C.VidContainer>
            <C.TitleVid>Título do vídeo bem aqui</C.TitleVid>
            <VidMain />
          </C.VidContainer>
          <C.Content2>
            <HapvidaNotredame />
          </C.Content2>
        </C.AlignContent>
      </C.Cont>
      <C.Hr />
      <C.CardsPriceContainer>
        <Cards title="Hapvida + NotreDame juntas oferecem: " />
      </C.CardsPriceContainer>
      <C.Hr2 />
      <PriceContent />
      <C.Hr />
      <C.CommonQuestions>
        <C.AlignContent>
          <C.CommonQuestionsTitle>Perguntas frequentes</C.CommonQuestionsTitle>
          <SelectCommon text="Quem é elegível para contratar a ser atendido através da Solução Nacional da Hapvida e NotreDame Intermédica?" />
          <SelectCommon text="Se um Cliente adquirir uma Solução Nacional, quem fará o atendimento: Hapvida ou NotreDame Intermédica?" />
          <SelectCommon text="A rede disponível para os Clientes da Solução Nacional abrangerá os hospitais de ambas as operações?" />
          <SelectCommon text="Hapvida e NotreDame Intermédica ainda estão adquirindo e integrando hospitais ás suas Redes Próprias.  <br /> Ao contratar uma Solução Nacional, os beneficiários poderão utilizar esses novos recursos?" />
        </C.AlignContent>
      </C.CommonQuestions>
      <C.Hr2 />
      <CardPrice />
      <Footer />
    </C.Container>
  );
};
