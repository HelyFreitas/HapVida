import * as C from "./styles";

import LogoContent1 from "../../assets/logo-content1.png";

export const NavbarTop = () => {
  return (
    <C.Container>
      <C.ContainerLimit>
        <C.Texts>
          <C.Paragraph>Contraste</C.Paragraph>
          <C.Img src={LogoContent1} />
        </C.Texts>
      </C.ContainerLimit>
    </C.Container>
  );
};
