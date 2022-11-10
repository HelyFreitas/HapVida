import * as R from "./styles";
import CardImg from "../../assets/cardimg.png";

export const CardMedias = () => {
  return (
    <R.Container>
      <img src={CardImg} className="card-content-img" />
      <h1 className="card-medias-title">Desafio verão GNDI + Fit Anywhere</h1>
      <p className="card-medias-paragraph">
        O Grupo NotreDame Intermédica (GNDI) e a Fit<br /> Anywhere, o maior
        aplicativo de wellness do Brasil, se<br /> juntaram para propor um desafio a
        você: praticar mais...
      </p>
      <p className="card-medias-paragraph">12/09/2022</p>
    </R.Container>
  );
};
