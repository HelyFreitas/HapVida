import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;

  border-bottom: 7px solid #0054b8;

  position: relative;

  .first-content {
    width: 59%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: #ffffff;
    /* box-shadow: 35px -14px 20px -13px white; */

    .header-x {
      display: flex;

      padding-bottom: 60px;
      padding-top: 30px;

      .p-header-x {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 15px;
        letter-spacing: 0.08px;

        color: #5b5b5f;
      }

      .p-nivel-x {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 15px;
        letter-spacing: 0.08px;

        color: #0054b8;
      }
    }

    .btn-header-second {
      background: #ffffff;

      border: 1px solid #0054b8;
      border-radius: 40px;

      padding: 7px 12px;

      width: 100px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;

      color: #0054b8;
    }

    .title-header {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 60px;
      letter-spacing: 0.08px;

      color: #0054b8;
    }

    .paragraph-header {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 0.08px;

      color: #5b5b5f;

      margin-bottom: 90px;

      width: 600px;
    }
  }

  .second-content {
    height: 100%;
    width: 48%;
    position: absolute;
    top: 0;
    right: 0;

    .second-content-content {
      height: 100%;

      display: flex;

      .img-header-component {
        width: 100%;
        height: 100%;

        /* object-fit: contain; */

        border-left: white 2px blur(4px);
      }
    }
  }
`;

export const Content1 = styled.div`
  height: 100%;

  background-color: white;

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AlignContent = styled.div`
  max-width: 1100px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 950px;
  }
`;
