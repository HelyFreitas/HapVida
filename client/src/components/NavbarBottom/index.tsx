import { ArrowCircleDown, ArrowUpRight } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo1 from "../../assets/logo1.png";
import { DropdownBtn } from "../DropdownBtn";

import * as C from "./styles";

export const NavbarBottom = () => {

  return (
    <C.Container>
      <C.PositionContent>
        <div className="top-menu-content2">
          <a href="/">
            <img src={Logo1} alt="" className="top-container-logo" />
          </a>
          <Link to="/about-institutional" className="top-menu-nav">
            Institucional
          </Link>
          <a className="top-menu-nav" href="#">
            Investidores <ArrowUpRight size={14} />
          </a>
          <Link className="top-menu-nav" to="/service-networks">
            Rede de atendimento
          </Link>
          <DropdownBtn />
          <Link to="/plans" className="top-menu-btn">
            Conhecer Planos
          </Link>
          <div className="btncont">
          </div>
        </div>
      </C.PositionContent>
    </C.Container>
  );
};
