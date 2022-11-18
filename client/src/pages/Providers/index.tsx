import { HeaderSecond } from "../../components/HeaderSecond";
import * as C from "./styles";

import BackProviders from "../../assets/corretoresback.png";
import { Cards } from "../../components/Cards";
import { CardProvider } from "../../components/CardProvider";
import { Footer } from "../../components/Footer";
import { NavbarTop } from "../../components/NavbarTop";
import { NavbarBottom } from "../../components/NavbarBottom";

export const Providers = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={BackProviders}
        title="Corretores"
        paragraph="Conheça nossos produtos e benefícios voltado para corretores. Estamos expandindo e buscamos parceiros inovadores e comprometidos com os nossos clientes. "
        link="/"
      />
      <C.ContentCards>
        <C.AlignContent>
          <div className="cards-container">
            <Cards title="Hapvida + NotreDame juntas oferecem:" />
          </div>
          <div className="cards-provider">
            <CardProvider
              subtitle="Corretor"
              title="PME"
              paragraph="Selecione uma opção"
              link1="Hapvida"
              link2="NDI"
            />
            <CardProvider
              subtitle="Corretor"
              title="Empresarial"
              paragraph="Selecione uma opção"
              link1="Hapvida"
              link2="NDI"
            />
          </div>
        </C.AlignContent>
      </C.ContentCards>
      <C.Content1>
        <C.AlignContent>
          <C.TitleContent>Seja um Corretor</C.TitleContent>
          <C.Content1Container>
            <C.FormContainer>
              <C.FormInputs>
                <C.InputName placeholder="Nome" />
                <C.InputEmail placeholder="E-mail" />
                <C.InputCell placeholder="Celular / Whatsapp" />
              </C.FormInputs>
              <C.FormSelects>
                <C.SelectState>
                  <C.Options1>Estado</C.Options1>
                </C.SelectState>
                <C.SelectCity>
                  <C.Options2>Cidade</C.Options2>
                </C.SelectCity>
              </C.FormSelects>
              <C.FormBtn>Receber proposta</C.FormBtn>
            </C.FormContainer>
          </C.Content1Container>
        </C.AlignContent>
      </C.Content1>
      <Footer />
    </C.Container>
  );
};
