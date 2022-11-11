import * as F from "./styles";

import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { ArrowCircleDown, ArrowUpRight } from "phosphor-react";

import Foto1 from "../../assets/foto1footer.png";
import Foto2 from "../../assets/foto2-footer.png"

export const Footer = () => {
  return (
    <F.Container>
      <F.Content>
        <div className="img-footer">
          <img src={Logo} alt="" />
        </div>
        <div className="cont">
          <div className="column-content">
            <p className="p-content-footer">
              Acesse sua área &nbsp;
              <ArrowCircleDown size={20} />
            </p>
            <Link className="links-column-content" to="#">
              Beneficiários
            </Link>
            <Link className="links-column-content" to="#">
              Corretores
            </Link>
            <Link className="links-column-content" to="#">
              Prestadores
            </Link>
            <Link className="links-column-content" to="#">
              Quero ser cliente
            </Link>
          </div>
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
