import styled from "styled-components";

export const BedroomContent = styled.div`
  /* border-bottom: 7px solid #f39a00; */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 45px;

  .bedroom-contents-texts {
    /* margin-left: 45px; */
    width: 88%;
  }

  .bedroom-content-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.08px;

    color: #0054b8;

    margin-top: 58px;
    margin-bottom: 21px;
  }

  .bedroom-content-p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.08px;

    color: #58585a;
  }

  .btn-bedroom-content {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 35px;
    margin-bottom: 65px;

    .bedroom-btn {
      background: #0054b8;
      border-radius: 40px;

      width: 365px;
      padding: 16px 40px;

      border: none;

      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      text-align: center;

      color: #ffffff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 35px;

  .inputs-bedroom {
    padding: 20px 12px;

    width: 365px;

    border: 1px solid #0054b8;
    border-radius: 10px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.2px;

    flex: none;
    order: 0;
    flex-grow: 0;

    outline: none;

    &::placeholder {
      color: #0054b8;
    }
  }
`;

export const Selects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 26px;

  .inputs-selects-bedroom {
    padding: 20px 12px;

    width: 365px;

    border: 1px solid #0054b8;
    border-radius: 10px;

    background-color: transparent;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.2px;

    flex: none;
    order: 0;
    flex-grow: 0;

    outline: none;

    color: #0054b8;
  }
`;

export const AlignItens = styled.div`
  max-width: 1300px;
  width: 100%;
`;
