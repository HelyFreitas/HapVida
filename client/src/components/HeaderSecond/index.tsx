import { ArrowLeft } from "phosphor-react";
import * as C from "./styles";

interface HeaderProps {
  img: any;
  title: string;
  paragraph: string;
}

export const HeaderSecond = (props: HeaderProps) => {
  return (
    <C.Container>
      <div className="first-content">
        <section className="header-x">
          <p className="p-header-x">&#91;Home&#93;&nbsp;&gt;</p>
          <p className="p-nivel-x">&nbsp;&#91;Nível X&#93;</p>
        </section>
        <button className="btn-header-second">
          <ArrowLeft size={16} color="#0054b8" />
          &nbsp;Sair
        </button>
        <h1 className="title-header">{props.title}</h1>
        <p className="paragraph-header">{props.paragraph}</p>
      </div>
      <div className="second-content">
        <div className="abs-div" />
        <div className="second-content-content">
          <img src={props.img} className="img-header-component" />
        </div>
      </div>
    </C.Container>
  );
};
