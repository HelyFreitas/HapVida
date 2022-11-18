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
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="cont">
          <DropdownBtnFooter />
          <div className="row-content">
            <Link className="links-footer" to="#">
              Institucional
            </Link>
            <Link className="links-footer" to="#">
              Investidores &nbsp;
              <ArrowUpRight size={20} />
            </Link>
            <Link className="links-footer" to="#">
              Rede de Atendimento
            </Link>
            <Link className="links-footer" to="#">
              Trabalhe Conosco
            </Link>
            <Link className="links-footer" to="#">
              Planos
            </Link>
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
