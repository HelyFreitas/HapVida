import styled from "styled-components";
import Back from "../../assets/back.png";

export const Container = styled.div`
  .divisor,
  .divisor4 {
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

    .circles-header {
      justify-content: center;
      margin-left: 530px;
    }
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
`;

export const Main = styled.main`
  .divisor2,
  .divisor3,
  .divisor5 {
    width: 100%;
    height: 7px;

    margin-bottom: 65px;

    background-color: #0054b8;
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
    margin-left: 85px;
    margin-top: 41px;

    .paragraph-main-title {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 117.2%;

      letter-spacing: 0.58px;

      color: #0054b8;
    }

    .paragraph-main-p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.08px;

      color: #58585a;

      margin-bottom: 27px;
    }
  }

  .cards-itens-main {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin-bottom: 65px;

    width: 100%;

    .card1,
    .card2 {
      background: #ffffff;
      border: 1px solid #c0c0c0;
      border-left: 10px solid #0054b8;
      border-radius: 10px;

      width: 554px;
      height: 160px;

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

        color: #0054b8;
      }

      .card-p {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        color: #0054b8;

        padding-bottom: 20px;
      }

      .icon-card {
        position: absolute;
        top: 70px;
        right: 10px;
      }
    }
  }
`;

export const SecondContent = styled.div`
  .vid-texts {
    display: flex;
    flex-direction: column;

    margin-left: 85px;

    .vid-title {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      letter-spacing: 0.08px;

      /* Cinza GNDI */

      color: #58585a;
    }

    .vid-paragraph {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.08px;

      /* Cinza GNDI */

      color: #58585a;
    }
  }

  .vids-contents {
    display: flex;

    gap: 65px;

    position: relative;
  }

  .circles-c {
    margin-top: 40px;
    margin-left: 600px;
    margin-bottom: 40px;
  }
`;

export const ThirdContent = styled.div`
  .card-media-div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .btn-position {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 58px;
    margin-bottom: 76px;
  }

  .third-content-btn {
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

export const TitleThirdContent = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.08px;

  color: #0054b8;

  margin-top: 58px;
  margin-left: 65px;
  margin-bottom: 30px;
`;
