import { HeaderSecond } from "../../components/HeaderSecond";

import HeaderBack from "../../assets/backsecondcontent.png";

import * as C from "./styles";
import { Footer } from "../../components/Footer";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";

export const ServiceNetworks = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={HeaderBack}
        paragraph="Conheça a sua rede de atendimento exclusiva! Nosso time de profissionais está pronto para ajudar você a tirar dúvidas ou fazer solicitações."
        title="Rede de atendimento"
        link="/"
      />

      <C.Main>
        <C.AlignContent>
          <C.FormContainer>
            <h1 className="form-title">Encontre uma rede</h1>
            <p className="form-paragraph">
              Selecione as opções para mostrarmos a rede de atendimento
              disponível.
            </p>

            <C.SelectAndBtn>
              <C.SelectsForm>
                <select className="select-form">
                  <option value="">Tipo de Rede</option>
                </select>
                <select className="select-form">
                  <option value="">Estado</option>
                </select>
                <select className="select-form">
                  <option value="">Cidade</option>
                </select>
              </C.SelectsForm>
              <div className="button-row">
                <button className="selects-form-btn">Encontrar rede</button>
              </div>
            </C.SelectAndBtn>
            <div className="row-hr">
              <hr className="hr-row" />
            </div>
            <C.FormNetwork>
              <p className="form-network-paragraph">
                Ou selecione uma rede na lista.
              </p>
              <div className="center-select">
                <select className="select-form-search">
                  <option value="">Digite para Buscar ou Selecione</option>
                </select>
              </div>
              <div className="btn-container-select">
                <button className="selects-search-form-btn">
                  Consultar pelo nome
                </button>
              </div>
            </C.FormNetwork>
          </C.FormContainer>
        </C.AlignContent>
      </C.Main>
      <Footer />
    </C.Container>
  );
};
