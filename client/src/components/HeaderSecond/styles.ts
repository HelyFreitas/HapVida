import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;

  display: flex;

  border-bottom: 7px solid #0054b8;

  .first-content {
    width: 59%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 80px;

    gap: 10px;

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
        /* identical to box height */

        letter-spacing: 0.08px;

        /* Neutral / Gray 1 */

        color: #5b5b5f;
      }

      .p-nivel-x {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 15px;
        /* identical to box height */

        letter-spacing: 0.08px;

        /* Neutral / Gray 1 */

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

      /* Branding/Hapvida_Blue */

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

      width: 526px;
    }
  }

  .second-content {
    /* width: 40%; */
    position: relative;
    height: auto;

    .second-content-content {
      height: 100%;
      /* width: 100%; */

      display: flex;

      .img-header-component {
        width: 100%;
        height: 100%;

        border-left: white 2px blur(4px);
      }
    }

    .abs-div {
      /* width: 100%; */

      box-shadow: 2px -4px 10px 4px white;
      background: white;
      /* z-index: 1; */

      position: absolute;
      top: 0;
      left: 0;
      background: white;
      height: 100%;
      width: 10px;
    }
  }
`;
