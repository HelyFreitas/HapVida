import * as S from "./styles";
import Client from "../../assets/client.png";
import Local from "../../assets/local.png";
import Hoospt from "../../assets/hospt.png";
import Houses from "../../assets/casas.png";
import Maleta from "../../assets/maleta.png";
import Quim from "../../assets/quim.png";
import Corac from "../../assets/coracao.png";
import Cruz from "../../assets/cruz.png";
import Dente from "../../assets/dente.png";

export const Cards = () => {
  return (
    <S.Container>
      <div className="content1-card">
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Client} alt="" />
          <h1 className="cards-title">+15 Milhões</h1>
          <p className="cards-paragraph">com Rede Própria</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Local} alt="" />
          <h1 className="cards-title">20 Estados</h1>
          <p className="cards-paragraph">de Clientes</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Hoospt} alt="" />
          <h1 className="cards-title">87 Hospitais</h1>
          <p className="cards-paragraph">Disponíveis</p>
        </section>
      </div>
      <div className="content2-card">
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Houses} alt="" />
          <h1 className="cards-title">76 Pronto</h1>
          <p className="cards-paragraph">Atendimentos</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Maleta} alt="" />
          <h1 className="cards-title">323 Centros</h1>
          <p className="cards-paragraph">Clínicos</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Quim} alt="" />
          <h1 className="cards-title">270 Unidades</h1>
          <p className="cards-paragraph">de Diagnóstico</p>
        </section>
      </div>
      <div className="content3-card">
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Corac} alt="" />
          <h1 className="cards-title">+66 Mil</h1>
          <p className="cards-paragraph">Colaboradores</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Cruz} alt="" />
          <h1 className="cards-title">+27,3 Mil</h1>
          <p className="cards-paragraph">Médicos</p>
        </section>
        <section className="cards-sect">
          <div className="card-div" />
          <img className="client-png" src={Dente} alt="" />
          <h1 className="cards-title">+33 Mil</h1>
          <p className="cards-paragraph">Dentistas</p>
        </section>
      </div>
    </S.Container>
  );
};
