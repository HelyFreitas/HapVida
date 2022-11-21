import { ArrowCircleRight, ArrowUpRight } from "phosphor-react";
import * as C from "./styles";

interface CardsPlansNdiProps {
  subtitlefirstcard: string;
  titlefirstcard: string;
  subtitlesecondcard: string;
  titlesecondcard: string;
}

export const CardsPlansNdi = (props: CardsPlansNdiProps) => {
  return (
    <C.Container>
      <C.AlignContent>
        <C.CardsContainer>
          <C.FirstCard>
            <C.SubtitleFirstCard>{props.subtitlefirstcard}</C.SubtitleFirstCard>
            <C.TitleFirstCard>{props.titlefirstcard}</C.TitleFirstCard>
            <C.ButtonFirstCard>
              <ArrowCircleRight color="#0054b8" weight="fill" size={30} />
            </C.ButtonFirstCard>
          </C.FirstCard>
          <C.SecondCard>
            <C.SubtitleSecondCard>
              {props.subtitlesecondcard}
            </C.SubtitleSecondCard>
            <C.TitleSecondCard>{props.titlesecondcard}</C.TitleSecondCard>
            <C.ButtonSecondCard>
              <ArrowCircleRight color="#0054b8" weight="fill" size={30} />
            </C.ButtonSecondCard>
          </C.SecondCard>
        </C.CardsContainer>
      </C.AlignContent>
    </C.Container>
  );
};
