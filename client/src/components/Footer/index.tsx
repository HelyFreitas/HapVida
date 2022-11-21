import * as F from "./styles";

import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { ArrowCircleDown, ArrowUpRight } from "phosphor-react";

import Foto1 from "../../assets/foto1footer.png";
import Foto2 from "../../assets/foto2-footer.png";
import { DropdownBtnFooter } from "../DropdownBtnFooter";

export const Footer = () => {
  return (
    <F.Container>
      <F.Content>
        <div className="img-footer">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="cont">
          <DropdownBtnFooter />
          <div className="row-content">
            <a className="links-footer" href="/about-institutional">
              Institucional
            </a>
            <a className="links-footer" href="#">
              Investidores &nbsp;
              <ArrowUpRight size={20} />
            </a>
            <a className="links-footer" href="/service-networks">
              Rede de Atendimento
            </a>
            <a className="links-footer" href="/work-with-us">
              Trabalhe Conosco
            </a>
            <a className="links-footer" href="/plans">
              Planos
            </a>
          </div>
        </div>
      </F.Content>
      <F.FooterContent>
        <div className="div-one">
          <img src={Foto1} alt="" />
        </div>
        <div className="div-two">
          <img src={Foto2} alt="" />
        </div>
      </F.FooterContent>
    </F.Container>
  );
};
