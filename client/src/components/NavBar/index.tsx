import { ArrowCircleDown, ArrowUpRight } from "phosphor-react";

import LogoContent1 from "../../assets/logo-content1.png";
import Logo1 from "../../assets/logo1.png";

import * as C from "./styles";

export const NavBar = () => {
  return (
    <C.Container>
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
    </C.Container>
  );
};
