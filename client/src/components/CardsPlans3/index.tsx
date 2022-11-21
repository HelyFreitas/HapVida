import { ArrowUpRight } from "phosphor-react";
import * as C from "./styles";

interface CardsPlansProps {
  subtitle1: string;
  title1: string;
  paragraph : string;
  link1: string | any;
  linktext1: string;
  link2: string | any;
  linktext2: string;
  link3: string | any;
  linktext3: string;
}

export const CardsPlans3 = (props: CardsPlansProps) => {
  return (
    <C.Container>
      <C.Card1>
        <C.TextCard1>
          <C.SubtitleCard1>{props.subtitle1}</C.SubtitleCard1>
          <C.TitleCard1>{props.title1}</C.TitleCard1>
          <C.Paragraph1>{props.paragraph}</C.Paragraph1>
        </C.TextCard1>
        <C.LinksCard1>
          <a href={props.link1} className="linkscards1">
            {props.linktext1}&nbsp;
            <ArrowUpRight />
          </a>
          <a href={props.link2} className="linkscards1">
            {props.linktext2}&nbsp;
            <ArrowUpRight />
          </a>
          <a href={props.link3} className="linkscards1">
            {props.linktext3}&nbsp;
            <ArrowUpRight />
          </a>
        </C.LinksCard1>
      </C.Card1>
    </C.Container>
  );
};
