import { ArrowUpRight } from "phosphor-react";
import { Link } from "react-router-dom";
import * as C from "./styles";

interface CardProviderProps {
  subtitle: string;
  title: string;
  paragraph: string;
  link1: string | any;
  link2: string | any;
}

export const CardProvider = (props: CardProviderProps) => {
  return (
    <C.Container>
      <C.Card>
        <C.Texts>
          <C.Subtitle>{props.subtitle}</C.Subtitle>
          <C.Title>{props.title}</C.Title>
          <C.Paragraph>{props.paragraph}</C.Paragraph>
        </C.Texts>
        <C.Links>
          <Link to="" className="links">
            {props.link1}&nbsp;
            <ArrowUpRight size={20} color="#0054B8" weight="regular" />
          </Link>
          <Link to="" className="links">
            {props.link2}
          </Link>
        </C.Links>
      </C.Card>
    </C.Container>
  );
};
