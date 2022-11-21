import * as C from "./styles";

export const PriceContent = () => {
  return (
    <C.CardContainer>
      <C.AlignContent>
        <div className="divivi">
          <div className="contents">
            <div className="text">
              <p className="paragraph-card-price">
                <span className="text-colored">Realize uma cotação</span> e
                descubra
                <br /> como a empresa de saúde que mais
                <br /> cresce no Brasil pode te ajudar
              </p>
            </div>
            <button className="soli-card">Solicitar proposta</button>
          </div>
        </div>
      </C.AlignContent>
    </C.CardContainer>
  );
};
