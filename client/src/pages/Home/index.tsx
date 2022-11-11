import * as C from "./styles";
import Logo1 from "../../assets/logo1.png";
import ContactPng from "../../assets/User.png";
import EmployerPng from "../../assets/Employer.png";

import { ArrowCircleRight } from "phosphor-react";
import { Cards } from "../../components/Cards";
import { VidMain } from "../../components/VidMain";
import { Vid } from "../../components/Vid";
import { Circles } from "../../components/Circles";
import { CardMedias } from "../../components/CardMedias";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Form } from "../../components/Form";

export const Home = () => {
  return (
    <C.Container>
      <NavBar />
      <C.Header>
        <div className="divdiv">
          <h1 className="header-title">
            Somos
            <br /> Hapvida &<br /> NotreDame Intermédica
          </h1>
          <p className="header-p">
            A maior rede própria de atendimento do Brasil.
          </p>
          <img src={Logo1} className="header-img" />
          <button className="header-btn">Sobre a Fusão Hapvida e GNDI</button>
          <div className="circles-header">
            <Circles />
          </div>
        </div>
      </C.Header>
      <hr className="divisor" />
      <C.Main>
        <C.FirstContent>
          <section className="itens-main">
            <div className="title-tt">
              <h1 className="firstcontent-title">
                Hapvida e NotreDame Intermédica:
                <br /> dois gigantes da saúde juntos
              </h1>
            </div>
            <div className="card-plan">
              <p className="card-plan-title">
                Mais saúde de qualidade.
                <br /> Mais perto de você.
              </p>
              <button className="card-plan-btn">Conhecer planos</button>
            </div>
          </section>

          <div className="paragraph-main">
            <h1 className="paragraph-main-title">Acesse sua área</h1>
            <p className="paragraph-main-p">
              Espaço personalizado de acordo com o seu perfil.
            </p>
          </div>

          <section className="cards-itens-main">
            <div className="card1">
              <img className="card-img" src={ContactPng} alt="" />
              <h1 className="card-title">Seja Cliente</h1>
              <p className="card-p">
                Conheça nossos planos e faça sua cotação.
              </p>
              <ArrowCircleRight
                className="icon-card"
                size={28}
                color="#0054B8"
                weight="fill"
              />
            </div>
            <div className="card2">
              <img className="card-img" src={EmployerPng} alt="" />
              <h1 className="card-title">Empresas</h1>
              <p className="card-p">Consulte serviços e mais.</p>
              <ArrowCircleRight
                className="icon-card"
                size={28}
                color="#0054B8"
                weight="fill"
              />
            </div>
          </section>
        </C.FirstContent>
        <hr className="divisor2" />
        <C.SecondContent>
            <Cards title="Juntos, somos:" />
          <section className="vid-texts">
            <h1 className="vid-title">Vídeos Institucionais</h1>
            <p className="vid-paragraph">
              Conheça mais sobre a campanha Solução Nacional
            </p>
          </section>
          <section className="vids-contents">
            <VidMain />
            <Vid />
          </section>
          <div className="circles-c">
            <Circles />
          </div>
        </C.SecondContent>
        <hr className="divisor3" />
        <C.ThirdContent>
          <C.TitleThirdContent>Na mídia</C.TitleThirdContent>
          <div className="card-media-div">
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
          </div>
          <div className="btn-position">
            <button className="third-content-btn">Ver mais notícias</button>
          </div>
        </C.ThirdContent>
        <hr className="divisor4" />
        <Form
          title="Seja Cliente"
          paragraph="Planos para você e sua família."
          button="Realizar Cotação"
        />
        <hr className="divisor5" />
      </C.Main>

      <Footer />
    </C.Container>
  );
};
