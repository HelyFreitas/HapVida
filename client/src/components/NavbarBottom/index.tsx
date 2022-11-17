import { ArrowCircleDown, ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo1 from "../../assets/logo1.png";
import { ModalRoutes } from "../ModalRoutes";

import * as C from "./styles";

export const NavbarBottom = () => {
  const [state, setState] = useState(false);

  const showModal = () => setState(!state);

  return (
    <C.Container>
      <C.ContainerContent>
        <div className="top-menu-content2">
          <img src={Logo1} alt="" className="top-container-logo" />
          <div className="itens-nav">
            <Link to="/about-institutional" className="top-menu-nav">
              Institucional
            </Link>
            <a className="top-menu-nav" href="#">
              Investidores <ArrowUpRight size={14} />
            </a>
            <Link className="top-menu-nav" to="/service-networks">
              Rede de atendimento
            </Link>
            <div className="menu-nav">
              <p className="top-menu-p">Acesse sua área</p>
              <button onClick={showModal} className="btn-top-nav">
                <ArrowCircleDown size={20} color="#58585a" />
              </button>
              {state && <ModalRoutes active={setState} />}
            </div>
          </div>
          <Link to="/plans" className="top-menu-btn">
            Conhecer Planos
          </Link>
        </div>
      </C.ContainerContent>
    </C.Container>
  );
};
