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

  .divisor2 {
    width: 100%;
    height: 7px;

    background-color: #f39a00;
  }
`;

export const Content1 = styled.div`
  display: flex;
  justify-content: center;

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
  display: flex;
  justify-content: center;

  width: 100%;

  position: relative;

  .first-content {
    height: 100%;
    width: 50%;

    background-color: #ffffff;
  }

  .second-content {
    width: 790px;
    height: 100%;

    background-image: url(${ShuterBack});
    background-repeat: no-repeat;

    z-index: -1;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
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

      padding-top: 50px;
    }
  }

  .card-container {
    .card {
      width: 485px;
      height: 250px;

      margin-top: 45px;
      margin-bottom: 100px;

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

export const Content3 = styled.div`
  display: flex;
  justify-content: center;

  .title-cards-media {
    width: 100%;

    display: flex;
    align-items: center;

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
    justify-content: space-between;
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
`;

export const AlignContent = styled.div`
  max-width: 1100px;
  width: 100%;
`;
