import * as C from "./styles";
import Logo1 from "../../assets/logo1.png";
import LogoContent1 from "../../assets/logo-content1.png";
import ContactPng from "../../assets/User.png";
import EmployerPng from "../../assets/Employer.png";
import CardImg from "../../assets/cardimg.png";

import { ArrowCircleDown, ArrowCircleRight, ArrowUpRight } from "phosphor-react";
import { Cards } from "../../components/Cards";
import { VidMain } from "../../components/VidMain";
import { Vid } from "../../components/Vid";
import { Circles } from "../../components/Circles";
import { CardMedias } from "../../components/CardMedias";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <C.Container>
      <section className="top-menu">
        <div className="top-menu-content1">
          <p className="top-menu-content1-p">Contraste</p>
          <img src={LogoContent1} alt="" className="top-menu-content1-img" />
        </div>
        <div className="top-menu-content2">
          <img src={Logo1} alt="" className="top-container-logo" />
          <div className="itens-nav">
            <a className="top-menu-nav" href="#">
              Institucional
            </a>
            <a className="top-menu-nav" href="#">
              Investidores <ArrowUpRight size={14} />
            </a>
            <a className="top-menu-nav" href="#">
              Rede de atendimento
            </a>
            <div className="menu-nav">
              <p className="top-menu-p">Acesse sua área</p>
              <button className="btn-top-nav">
                <ArrowCircleDown size={20} color="#58585a" />
              </button>
            </div>
          </div>
          <button className="top-menu-btn">Conhecer Planos</button>
        </div>
      </section>

      {/*//////////////////////////////////////////////////////////////////////////*/}

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
          <div className="container-second-content">
            <h1 className="second-content-title">Juntos, somos:</h1>
            <Cards />
          </div>
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
            <CardMedias />
            <CardMedias />
            <CardMedias />
          </div>
          <div className="btn-position">
            <button className="third-content-btn">Ver mais notícias</button>
          </div>
        </C.ThirdContent>
        <hr className="divisor4" />
        <C.BedroomContent>
          <div className="bedroom-contents-texts">
            <h1 className="bedroom-content-title">Seja Cliente</h1>
            <p className="bedroom-content-p">Planos para você e sua família.</p>
          </div>

          <C.Form>
            <input className="inputs-bedroom" type="text" placeholder="Nome" />
            <input
              className="inputs-bedroom"
              type="email"
              placeholder="E-mail"
            />
            <input
              className="inputs-bedroom"
              type="tel"
              placeholder="Celular / Whatsapp"
            />
          </C.Form>
          <C.Selects>
            <select className="inputs-selects-bedroom">
              <option value="">Estado</option>
            </select>
            <select className="inputs-selects-bedroom">
              <option value="">Cidade</option>
            </select>
            <select className="inputs-selects-bedroom">
              <option value="">Seu perfil</option>
            </select>
          </C.Selects>
          <div className="btn-bedroom-content">
            <button className="bedroom-btn">Realizar Cotação</button>
          </div>
        </C.BedroomContent>
        <hr className="divisor5" />
      </C.Main>

      <Footer />
    </C.Container>
  );
};
