import styled from "styled-components";

import ShuterBack from "../../assets/backshuter.png";

export const Container = styled.div``;

export const Main = styled.main`
  .divisorcontent {
    width: 100%;
    height: 10px;

    background-color: #0054b8;

    margin-bottom: 68px;
  }

  .divisor3 {
    width: 100%;
    height: 10px;

    background-color: #0054b8;

    margin-bottom: 46px;
  }

  .title-cards-media {
    width: 100%;

    display: flex;
    align-items: center;

    margin-left: 70px;
    margin-bottom: 40px;

    .title-card-media {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: 0.08px;

      /* Branding/Hapvida_Blue */

      color: #0054b8;
    }
  }

  .cards-medias {
    display: flex;
    justify-content: center;

    gap: 65px;
  }

  .btn-position-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 58px;
    margin-bottom: 76px;
  }

  .third-content-card-btn {
    width: 336px;
    height: 56px;

    justify-content: center;

    background: #0054b8;
    border-radius: 40px;
    border: none;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #ffffff;
  }

  .divisor2 {
    width: 100%;
    height: 7px;

    background-color: #f39a00;
  }
`;

export const Content1 = styled.div`
  padding-left: 70px;

  .content1-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 117.2%;
    /* or 42px */

    letter-spacing: 0.58px;

    /* Azul Hapvida */

    color: #0054b8;

    margin-top: 78px;
    margin-bottom: 38px;
  }

  .cards-content1 {
    display: flex;

    margin-bottom: 42px;

    gap: 68px;
  }

  .cards-content2 {
    display: flex;

    gap: 68px;

    margin-bottom: 108px;
  }

  .section-cards-content1 {
    background: #ffffff;
    border: 1px solid #c0c0c0;
    border-left: 10px solid #0054b8;
    border-radius: 10px;

    padding: 10px;

    position: relative;

    width: 452px;
    height: 182px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 50px;

    gap: 4px;
  }

  .subtitle-card {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    letter-spacing: 0.08px;

    /* Branding/Hapvida_Blue */

    color: #0054b8;
  }

  .title-card {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    /* identical to box height */

    letter-spacing: 0.08px;

    /* Branding/Hapvida_Blue */

    color: #0054b8;
  }

  .paragraph-card {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: 0.08px;

    /* Branding/Hapvida_Blue */

    color: #0054b8;
  }

  .icon-card {
    position: absolute;
    top: 75px;
    right: 30px;
  }
`;

export const Content2 = styled.div`
  width: 100%;
  height: 496px;

  display: flex;
  align-items: center;

  .first-content {
    width: 50%;
    height: 100%;
  }

  .second-content {
    width: 50%;
    height: 100%;

    background-image: url(${ShuterBack});
  }

  .title-position {
    .title {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: 0.08px;

      /* Branding/Hapvida_Blue */

      color: #0054b8;

      margin-top: 50px;
      margin-left: 70px;
    }
  }

  .card-container {
    .card {
      width: 485px;
      height: 250px;

      margin-left: 70px;
      margin-top: 45px;

      background: #ffffff;
      border: 1px solid #c0c0c0;
      border-left: 10px solid #0054b8;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .hr {
          width: 100%;
          height: 1px;

          opacity: 0.2;
          /* Branding/Hapvida_Blue */

          border: 1px solid #0054b8;
        }

        .title-card {
          font-family: "Source Sans Pro";
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          line-height: 45px;
          letter-spacing: 0.08px;

          /* Branding/Hapvida_Blue */

          color: #0054b8;

          padding-left: 50px;
        }

        .paragraph-card {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;

          padding-left: 50px;

          /* Azul Hapvida */

          color: #0054b8;

          margin-bottom: 16px;
        }

        .links-card {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-decoration-line: underline;

          /* Branding/Hapvida_Blue */

          color: #0054b8;

          margin-top: 16px;
          margin-bottom: 16px;

          padding-left: 50px;
        }

        .links-card2 {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          display: flex;
          align-items: center;
          text-decoration-line: underline;

          /* Branding/Hapvida_Blue */

          color: #0054b8;

          margin-top: 16px;

          padding-left: 50px;
        }
      }
    }
  }
`;
