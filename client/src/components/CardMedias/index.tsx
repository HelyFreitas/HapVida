import * as R from "./styles";
import CardImg from "../../assets/cardimg.png";

interface CardMediasProps {
  title : string;
  paragraph : string;
  date : string;
}

export const CardMedias = (props : CardMediasProps) => {
  return (
    <R.Container>
      <img src={CardImg} className="card-content-img" />
      <h1 className="card-medias-title">{props.title}</h1>
      <p className="card-medias-paragraph">
        {props.paragraph}
      </p>
      <p className="card-medias-paragraph">{props.date}</p>
    </R.Container>
  );
};
