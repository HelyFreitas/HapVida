import styled from "styled-components";

import CardBack from "../../assets/cotacaoback.png";

export const CardContainer = styled.div`
  background-image: url(${CardBack});
  background-size: cover;

  width: 100%;
  height: 564px;

  display: flex;
  align-items: center;

  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    margin-left: 119px;
  }

  .paragraph-card-price {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;

    color: #58585a;

    .text-colored {
      color: #db6e2d;
    }
  }
  .soli-card {
    width: 335px;

    background: #0054b8;
    border-radius: 40px;

    border: none;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    padding: 15px 0;

    color: #ffffff;
  }
`;
