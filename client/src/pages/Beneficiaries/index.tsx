import { ArrowCircleRight, ArrowUpRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { CardMedias } from "../../components/CardMedias";
import { Footer } from "../../components/Footer";
import { HeaderSecond } from "../../components/HeaderSecond";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";

import BackHeader from "..//../assets/backcontainer.png";

import * as C from "./styles";

export const Beneficiaries = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={BackHeader}
        paragraph="Acesse sua área para marcar consultas e exames, visualizar sua carteirinha digital ou alterar informações."
        title="Beneficiários"
        link="/"
      />
      <C.Main>
        <C.Content1>
          <h1 className="content1-title">Já é cliente? Acesse sua área:</h1>
          <div className="cards-content1">
            <section className="section-cards-content1">
              <p className="subtitle-card">Acesse sua área</p>
              <h1 className="title-card">Hapvida</h1>
              <p className="paragraph-card">Veja as soluções exclusivas</p>
              <div className="icon-card">
                <ArrowCircleRight size={28} weight="fill" color="#0054b8" />
              </div>
            </section>
            <section className="section-cards-content1">
              <p className="subtitle-card">Acesse sua área</p>
              <h1 className="title-card">NDI Sul</h1>
              <p className="paragraph-card">Veja as soluções exclusivas</p>
              <div className="icon-card">
                <ArrowCircleRight size={28} weight="fill" color="#0054b8" />
              </div>
            </section>
          </div>
          <div className="cards-content2">
            <section className="section-cards-content1">
              <p className="subtitle-card">Acesse sua área</p>
              <h1 className="title-card">NDI São Paulo</h1>
              <p className="paragraph-card">Veja as soluções exclusivas</p>
              <div className="icon-card">
                <ArrowCircleRight size={28} weight="fill" color="#0054b8" />
              </div>
            </section>
            <section className="section-cards-content1">
              <p className="subtitle-card">Acesse sua área</p>
              <h1 className="title-card">NDI Minas Gerais</h1>
              <p className="paragraph-card">Veja as soluções exclusivas</p>
              <div className="icon-card">
                <ArrowCircleRight size={28} weight="fill" color="#0054b8" />
              </div>
            </section>
          </div>
        </C.Content1>
        <hr className="divisorcontent" />
        <div className="title-cards-media">
          <h1 className="title-card-media">Na mídia:</h1>
        </div>
        <div className="cards-medias">
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
        <div className="btn-position-card">
          <button className="third-content-card-btn">Ver mais notícias</button>
        </div>
        <hr className="divisor2" />
        <C.Content2>
          <div className="first-content">
            <div className="title-position">
              <h1 className="title">Central de ajuda</h1>
            </div>
            <section className="card-container">
              <div className="card">
                <div className="texts">
                  <h1 className="title-card">Vamos ajudar você</h1>
                  <p className="paragraph-card">
                    Tenha ajuda com assuntos financeiros,
                    <br /> autorizações e muito mais.
                  </p>
                  <hr className="hr" />
                  <Link to="" className="links-card">
                    Hapvida&nbsp;
                    <ArrowUpRight size={20} />
                  </Link>
                  <hr className="hr" />
                  <Link to="" className="links-card2">
                    NDI&nbsp;
                    <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="second-content" />
        </C.Content2>
        <hr className="divisor3" />
      </C.Main>
      <Footer />
    </C.Container>
  );
};
