import styled from "styled-components";

export const Container = styled.div``;

export const HpvidaNotreDame = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  grid-auto-rows: 400px;
  max-width: 1368px;
  margin: 0 auto;
  justify-content: space-around;

  .hapvida-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .notredame-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .notredame-logo,
  .hapvida-logo {
    margin-bottom: 30px;
  }

  .divs-hr {
    width: 300px;
    height: 7px;

    background-color: #f49e00;
  }

  .strng-p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 25px;

    color: #58585a;
  }

  .content-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #58585a;
  }

  .img-div {
    width: 299px;
    height: 104px;

    object-fit: contain;
  }
`;
