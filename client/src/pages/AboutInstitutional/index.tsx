import { HeaderSecond } from "../../components/HeaderSecond";

import HeaderBack from "../../assets/backsecondcontent.png";
import LogoHapVida from "../../assets/logohapvida.png";
import LogoNotreDame from "../../assets/notrelogo.png";

import * as C from "./styles";
import { VidMain } from "../../components/VidMain";
import { Cards } from "../../components/Cards";
import { ButtonContent } from "../../components/ButtonContent";
import { CardPrice } from "../../components/CardPrice";
import { Footer } from "../../components/Footer";
import { Circles } from "../../components/Circles";
import { NavbarTop } from "../../components/NavbarTop";
import { NavbarBottom } from "../../components/NavbarBottom";

export const AboutInstitutional = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={HeaderBack}
        title="Integração Hapvida e GNDI"
        paragraph="Fique por dentro das novidades."
        link="/"
      />
      <C.Main>
        <C.AlignContent>
          <div className="title-main">
            <h1 className="title-main-second">Sobre a Fusão Hapvida e GNDI</h1>
          </div>
          <div className="vids-main">
            <VidMain />
            {/*<div className="circles-main">
              <Circles />
            </div>*/}
          </div>
          <div className="text-container">
            <p className="content-text">
              Começa mais um capítulo importante da história da saúde
              suplementar no Brasil: inicia a fusão Hapvida e NotreDame
              Intermédica, e isso só foi possível em razão da similaridade dos
              nossos valores de dar acesso à saúde de qualidade para a população
              brasileira e da competência do trabalho das nossas equipes.
              <br />
              <br /> Com essa união, formamos o maior sistema de saúde
              suplementar do Brasil e uma das maiores empresas verticalizadas do
              mundo.
              <br />
              <br /> A combinação de negócios entre as Companhias possibilita a
              integração de uma vasta gama de produtos, estruturas hospitalares,
              recursos e soluções em benefício de clientes, beneficiários e
              prospects de ambas as Empresas.
              <br />
              <br /> O Hapvida tem forte atuação nas regiões Norte, Nordeste,
              Centro-Oeste e interior de São Paulo, com 43 anos de atuação no
              mercado, 7,4 milhões de beneficiários de Saúde e Odontologia e uma
              ampla rede com 477 unidades próprias.
              <br />
              <br /> O GNDI possui mais de 50 anos de história e tem forte
              atuação no mercado de Saúde das regiões Sudeste e Sul. São mais de
              7,8 milhões de beneficiários e uma ampla rede assistencial de
              atendimento composta por unidades próprias e credenciadas.
              Atendemos mais de 15 milhões de beneficiários, entre Saúde e
              Odontologia, com Rede Própria, em todas as regiões do País.
              <br />
              <br /> Juntos, somos mais fortes!
            </p>
          </div>
          <C.HpvidaNotreDame>
            <div className="hapvida-div">
              <img className="img-div" src={LogoHapVida} alt="" />
              <hr className="divs-hr" />
              <strong className="strng-p">Hapvida, saúde para valer.</strong>
              <p className="content-paragraph">
                O sistema de medicina e odontologia
                <br /> que mais cresce no Brasil
              </p>
              <ButtonContent text="Ler conteúdo" />
            </div>
            <div className="notredame-div">
              <img className="img-div" src={LogoNotreDame} alt="" />
              <hr className="divs-hr" />
              <strong className="strng-p">Notredame Intermédica</strong>
              <p className="content-paragraph">
                Melhores soluções em saúde e<br /> odontologia
              </p>
              <ButtonContent text="Ler conteúdo" />
            </div>
          </C.HpvidaNotreDame>
        </C.AlignContent>
        <hr className="divisorContent" />
        <C.AlignContent>
          <Cards title="Hapvida + NotreDame juntas oferecem:" />
        </C.AlignContent>
      </C.Main>
      <hr className="divisor-primary" />

      <CardPrice />
      <Footer />
    </C.Container>
  );
};
