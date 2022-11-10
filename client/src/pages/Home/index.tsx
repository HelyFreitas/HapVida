import * as C from "./styles";
import Logo1 from "../../assets/logo1.png";
import LogoContent1 from "../../assets/logo-content1.png";
import Circle from "../../assets/circle.png";
import CircleBlue from "../../assets/circleBlue.png";
import ContactPng from "../../assets/User.png"
import EmployerPng from "../../assets/Employer.png"

import { ArrowCircleRight, ArrowUpRight } from "phosphor-react";
import { Link } from "react-router-dom";

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
            <p className="top-menu-nav">Acesse sua área</p>
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
          <div className="circles">
            <img src={CircleBlue} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
            <img src={Circle} alt="" />
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
              <p className="card-p">Conheça nossos planos e faça sua cotação.</p>
              <ArrowCircleRight className="icon-card" size={28} color="#0054B8" weight="fill" />
            </div>
            <div className="card2">
              <img className="card-img" src={EmployerPng} alt="" />
              <h1 className="card-title">Empresas</h1>
              <p className="card-p">Consulte serviços e mais.</p>
              <ArrowCircleRight className="icon-card" size={28} color="#0054B8" weight="fill" />
            </div>
          </section>
        </C.FirstContent>
        <hr className="divisor2" />
      </C.Main>
    </C.Container>
  );
};
