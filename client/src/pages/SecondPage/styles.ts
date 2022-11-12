import styled from "styled-components";

export const Container = styled.div`
  .divisorContent {
    height: 7px;

    width: 100%;
    background-color: #0054b8;

    margin-top: 90px;
    margin-bottom: 65px;
  }
`;

export const Main = styled.main`
  .title-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title-main-second {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.08px;

      /* Branding/Hapvida_Blue */

      color: #0054b8;

      margin-top: 82px;
      margin-bottom: 40px;
    }
  }

  .vids-main {
    display: flex;

    gap: 65px;

    position: relative;

    margin-bottom: 94px;

    .circles-main {
      position: absolute;
      top: 391px;
      left: 616px;
    }
  }

  .text-container {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 120px;
  }

  .content-text {
    width: 100%;
    max-width: 800px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: justify;
    letter-spacing: 0.08px;

    color: #5b5b5f;
  }

  .divisor-primary {
    background-color: #f49e00;

    width: 100%;
    height: 7px;
  }

  .divisor-second {
    background-color: #0054b8;

    width: 100%;
    height: 7px;

    margin-bottom: 46px;
  }
`;

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
