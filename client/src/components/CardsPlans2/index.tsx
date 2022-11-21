import { ArrowUpRight } from "phosphor-react";
import * as C from "./styles";

interface CardsPlansProps {
  subtitle1: string;
  title1: string;
  paragraph: string;
  link1: string | any;
  linktext1: string;
  link2: string | any;
  linktext2: string;
}

export const CardsPlans2 = (props: CardsPlansProps) => {
  return (
    <C.Container>
      <C.Card2>
        <C.TextCard2>
          <C.SubtitleCard2>{props.subtitle1}</C.SubtitleCard2>
          <C.TitleCard2>{props.title1}</C.TitleCard2>
          <C.ParagraphCard2>{props.paragraph}</C.ParagraphCard2>
        </C.TextCard2>
        <C.LinksCard2>
          <a href={props.link1} className="linkscards2">
            {props.linktext1}&nbsp;
            <ArrowUpRight />
          </a>
          <a href={props.link2} className="linkscards2">
            {props.linktext2}&nbsp;
            <ArrowUpRight />
          </a>
        </C.LinksCard2>
      </C.Card2>
    </C.Container>
  );
};
