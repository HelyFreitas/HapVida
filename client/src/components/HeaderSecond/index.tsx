import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";
import * as C from "./styles";

interface HeaderProps {
  img: any;
  title: string;
  paragraph: string;
  link : any;
}

export const HeaderSecond = (props: HeaderProps) => {
  return (
    <C.Container>
      <div className="first-content">
        <C.Content1>
        <section className="header-x">
          <p className="p-header-x">&#91;Home&#93;&nbsp;&gt;</p>
          <p className="p-nivel-x">&nbsp;&#91;Nível X&#93;</p>
        </section>
        <Link to={props.link} className="btn-header-second">
          <ArrowLeft size={16} color="#0054b8" />
          &nbsp;Voltar
        </Link>
        <h1 className="title-header">{props.title}</h1>
        <p className="paragraph-header">{props.paragraph}</p>
        </C.Content1>
      </div>
      <div className="second-content">
        {/* <div className="abs-div" /> */}
        <div className="second-content-content">
          <img src={props.img} className="img-header-component" />
        </div>
      </div>
    </C.Container>
  );
};
