import styled from "styled-components";

export const Container = styled.div``;

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

    /* Neutral / Gray 1 */

    color: #5b5b5f;
  }
`;

export const HpvidaNotreDame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .hapvida-div,
  .notredame-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .notredame-logo,
    .hapvida-logo {
      margin-bottom: 30px;
    }

    .divs-hr {
      width: 300px;
      height: 7px;

      background-color: #f49e00;
    }
  }
`;
