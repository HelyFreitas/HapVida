import * as C from "./styles";
import Logo1 from "../../assets/logo1.png";
import LogoContent1 from "../../assets/logo-content1.png";
import Circle from "../../assets/circle.png"

import { ArrowUpRight } from "phosphor-react";
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
          <ul>
              <a className="top-menu-a" href="#">Institucional</a>
              <a className="top-menu-a" href="#">
                Investidores <ArrowUpRight size={14} />
              </a>
              <a className="top-menu-a" href="#">Rede de atendimento</a>
            <select value="">
              <option value="beneficiaries">Acesse sua área</option>
              <option value="beneficiaries">
                <Link to="/benefiaries">Beneficiários</Link>
              </option>
              <option value="beneficiaries">
                <Link to="/brokers">Corretores</Link>
              </option>
              <option value="beneficiaries">
                <Link to="/providers">Prestadores</Link>
              </option>
              <option value="beneficiaries">
                <Link to="/client">Quero ser cliente</Link>
              </option>
            </select>
          </ul>
          <button>Conhecer Planos</button>
        </div>
      </section>

      {/*//////////////////////////////////////////////////////////////////////////*/}

      <C.Header>
        <h1>Somos Hapvida & NotreDame Intermédica</h1>
        <p className="header-p">
          A maior rede própria de atendimento do Brasil.
        </p>
        <img src={Logo1} className="header-img" />
        <button>Sobre a Fusão Hapvida e GNDI</button>
        <div className="circles">
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
        </div>
      </C.Header>
    </C.Container>
  );
};
