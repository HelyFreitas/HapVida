import { HeaderSecond } from "../../components/HeaderSecond";

import NoticesBack from "../../assets/noticesback.png";

import * as C from "./styles";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { NavbarBottom } from "../../components/NavbarBottom";
import { NavbarTop } from "../../components/NavbarTop";

import Back from "../../assets/imgboletos.png";
import { ButtonContent } from "../../components/ButtonContent";

export const Notices2 = () => {
  return (
    <C.Container>
      <NavbarTop />
      <NavbarBottom />
      <HeaderSecond
        img={NoticesBack}
        title="Notícias"
        paragraph="Muita informação, novidades e conteúdos exclusivos."
        link="/"
      />
      <C.CardContainer>
        <C.AlignContent>
          <C.PositionTitle>
            <C.Title>Boletos falsos: Não caia neste golpe</C.Title>
          </C.PositionTitle>
          <C.Content1>
            <C.ImgBoletos src={Back} />
            <C.ImgDescription>
              <C.Paragraph>Publicado em: 23/10/2022</C.Paragraph>
              <C.Strong>Autor(a): Hapvida Medicina</C.Strong>
            </C.ImgDescription>
            <C.P>
              O Brasil é um país com uma enorme geração anual de boletos: cerca
              de 3,5 milhões.
              <br />
              <br /> Com uma produção de boletos tão grande, o ramo se torna um
              campo fértil para golpes de estelionatários, incluindo hackers.
              <br />
              <br /> E, de fato, fraudes em documentos fiscais digitais e
              físicos tem se tornado cada vez mais comum.
              <br />
              <br /> Devido à quantidade de transações que são efetuadas por
              meio de boletos bancários anualmente, o que equivale a 17 vezes a
              população do país, garantir a autenticidade dos documentos também
              se torna mais difícil a cada dia.
              <br />
              <br /> No último ano, uma série de medidas foram anunciadas pela
              Febraban (Federação Brasileira dos Bancos), para garantir a
              autenticidade dos boletos.
            </C.P>
            <C.ButtonNotices href="/notices">Ver mais notícias</C.ButtonNotices>
          </C.Content1>
        </C.AlignContent>
      </C.CardContainer>
      <Form
        title="Receba notícias por e-mail"
        paragraph="Insira seus dados e fique bem informado."
        button="Receber notícias"
      />
      <Footer />
    </C.Container>
  );
};
