import * as C from "./styles";

import LogoHapVida from "../../assets/logohapvida.png";
import LogoNotreDame from "../../assets/notrelogo.png";
import { ButtonContent } from "../ButtonContent";

export const HapvidaNotredame = () => {
  return (
    <C.Container>
      <C.HpvidaNotreDame>
        <div className="hapvida-div">
          <img className="img-div" src={LogoHapVida} alt="" />
          <hr className="divs-hr" />
          <strong className="strng-p">Hapvida, saúde para valer.</strong>
          <p className="content-paragraph">
            O sistema de medicina e odontologia
            <br /> que mais cresce no Brasil
          </p>
          <ButtonContent text="Ler conteúdo" />
        </div>
        <div className="notredame-div">
          <img className="img-div" src={LogoNotreDame} alt="" />
          <hr className="divs-hr" />
          <strong className="strng-p">Notredame Intermédica</strong>
          <p className="content-paragraph">
            Melhores soluções em saúde e<br /> odontologia
          </p>
          <ButtonContent text="Ler conteúdo" />
        </div>
      </C.HpvidaNotreDame>
    </C.Container>
  );
};
