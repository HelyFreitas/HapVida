import * as C from "./styles";
import Logo1 from "../../assets/logo1.png";
import ContactPng from "../../assets/User.png";
import EmployerPng from "../../assets/Employer.png";

import { ArrowCircleRight } from "phosphor-react";
import { Cards } from "../../components/Cards";
import { VidMain } from "../../components/VidMain";
import { Circles } from "../../components/Circles";
import { CardMedias } from "../../components/CardMedias";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Link } from "react-router-dom";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";

export const Home = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <C.Header>
        <C.AlignHeader>
          <div className="divdiv">
            <h1 className="header-title">
              Somos
              <br />
              Hapvida
              <br />
              NotreDame Intermédica
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
        </C.AlignHeader>
      </C.Header>
      <hr className="divisor" />
      <C.Main>
        <C.FirstContent>
          <C.AlignFirstContent>
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
          </C.AlignFirstContent>
        </C.FirstContent>
        <hr className="divisor2" />
        <Cards title="Juntos, somos:" />
        <C.SecondContent>
          <C.AlignSecondContent>
            <section className="vid-texts">
              <h1 className="vid-title">Vídeos Institucionais</h1>
              <p className="vid-paragraph">
                Conheça mais sobre a campanha Solução Nacional
              </p>
            </section>
            <section className="vids-contents">
              <VidMain />
            </section>
            <div className="circles-c">
              <Circles />
            </div>
          </C.AlignSecondContent>
        </C.SecondContent>
        <hr className="divisor3" />
        <C.ThirdContent>
          <C.AlignFirstContent>
            <C.TitleThirdContent>Na mídia</C.TitleThirdContent>
            <div className="card-media-div">
              <CardMedias
                title="Desafio verão GNDI + Fit Anywhere"
                paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit Anywhere, o maior
        aplicativo de wellness do Brasil, se juntaram para propor um desafio a
        você: praticar mais..."
                date="12/09/2022"
              />
              <CardMedias
                title="Desafio verão GNDI + Fit Anywhere"
                paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit Anywhere, o maior
        aplicativo de wellness do Brasil, se juntaram para propor um desafio a
        você: praticar mais..."
                date="12/09/2022"
              />
              <CardMedias
                title="Desafio verão GNDI + Fit Anywhere"
                paragraph="O Grupo NotreDame Intermédica (GNDI) e a Fit Anywhere, o maior
        aplicativo de wellness do Brasil, se juntaram para propor um desafio a
        você: praticar mais..."
                date="12/09/2022"
              />
            </div>
            <div className="btn-position">
              <Link to="/notices" className="third-content-btn">
                Ver mais notícias
              </Link>
            </div>
          </C.AlignFirstContent>
        </C.ThirdContent>
        <hr className="divisor4" />
        <Form
          title="Seja Cliente"
          paragraph="Planos para você e sua família."
          button="Realizar Cotação"
        />
      </C.Main>

      <Footer />
    </C.Container>
  );
};
