import styled from "styled-components";
import Back from "../../assets/back.png";

export const Container = styled.div`
  .top-menu {
    border-bottom: 1px solid #ccccd0;

    .top-menu-content1 {
      display: flex;

      width: 100%;

      background-color: #000000;

      justify-content: right;
      padding-right: 110px;

      .top-menu-content1-p {
        color: #ffffff;

        padding-right: 5px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;

        display: flex;
        align-items: center;
      }
    }

    .top-menu-content2 {
      display: flex;
      align-items: center;
      justify-content: center;

      .itens-nav {
        display: flex;
      }

      .top-menu-nav {
        text-decoration: none;

        padding-right: 50px;

        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        color: #58585a;
      }

      .top-container-logo {
        padding-right: 40px;

        padding-top: 5px;
        padding-bottom: 5px;
      }
    }

    .top-menu-btn {
      background: #0054b8;
      border-radius: 40px;

      padding: 12px;

      border: none;

      font-weight: 600;

      color: white;

      margin-left: 40px;
    }
  }

  .divisor {
    width: 100%;
    height: 7px;

    background-color: #f49e00;
  }
`;

export const Header = styled.header`
  background-image: url(${Back});
  background-size: cover;

  height: 480px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: left;

  position: relative;

  .divdiv {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-left: 145px;
  }

  .header-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: 0.08px;

    color: #0054b8;

    padding-bottom: 20px;
  }

  .header-p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.08px;

    /* Neutral / Gray 1 */

    color: #5b5b5f;

    padding-bottom: 24px;
  }

  .header-img {
    width: 328px;
    height: 60px;

    margin-bottom: 24px;
  }

  .header-btn {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #ffffff;

    background: #0054b8;
    border-radius: 40px;

    width: 328px;

    padding-bottom: 16px;
    padding-top: 16px;

    border: none;
  }

  .circles {
    position: absolute;

    top: 448px;
    left: 720px;
  }
`;

export const Main = styled.main`
  .divisor2 {
    width: 100%;
    height: 7px;

    background-color: #0054b8;

    margin-bottom: 100px;
  }
`;

export const FirstContent = styled.div`
  .itens-main {
    display: flex;
    justify-content: center;

    margin-top: 60px;

    .firstcontent-title {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: 0.08px;

      color: #0054b8;

      padding-right: 82px;
    }

    .card-plan {
      background: #db6e2d;
      border-radius: 20px;

      padding: 33px;

      display: flex;
      flex-direction: column;

      .card-plan-title {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.08px;

        /* Neutral / White */

        color: #ffffff;

        padding-bottom: 25px;
      }

      .card-plan-btn {
        width: 390px;

        padding-top: 17px;
        padding-bottom: 17px;
        margin-bottom: 6px;

        background: #ffffff;
        border-radius: 40px;

        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;

        /* Laranja Hap */

        color: #db6e2d;

        border: none;
      }
    }
  }

  .paragraph-main {
    margin-left: 380px;
    margin-top: 41px;

    .paragraph-main-title {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 117.2%;
      /* or 42px */

      letter-spacing: 0.58px;

      /* Azul Hapvida */

      color: #0054b8;
    }

    .paragraph-main-p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.08px;

      /* Cinza GNDI */

      color: #58585a;

      margin-bottom: 27px;
    }
  }

  .cards-itens-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 375px;
    padding-right: 375px;
    margin-bottom: 65px;

    .card1,
    .card2 {
      background: #ffffff;
      border: 1px solid #c0c0c0;
      border-left: 10px solid #0054b8;
      border-radius: 10px;

      width: 554px;

      justify-content: center;

      position: relative;

      padding-left: 20px;

      .card-img {
        padding-top: 25px;
      }

      .card-title {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0.08px;

        /* Branding/Hapvida_Blue */

        color: #0054b8;
      }

      .card-p {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        /* Branding/Hapvida_Blue */

        color: #0054b8;

        padding-bottom: 20px;
      }

      .icon-card {
        position: absolute;
        top: 60px;
        right: 10px;
      }
    }
  }
`;

export const SecondContent = styled.div``;

export const ThirdContent = styled.div``;

export const BedroomContent = styled.div``;
