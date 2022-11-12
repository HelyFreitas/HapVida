import * as C from "./styles";

export const CardPrice = () => {
  return (
    <C.CardContainer>
      <div className="text">
        <p className="paragraph-card-price">
          <span className="text-colored">Realize uma cotação</span> e descubra
          <br /> como a empresa de saúde que mais
          <br /> cresce no Brasil pode te ajudar
        </p>
        <button className="soli-card">Solicitar proposta</button>
      </div>
    </C.CardContainer>
  );
};
