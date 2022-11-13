import styled from "styled-components";

export const Container = styled.div`
  .row-hr2 {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 62px;

    .hr-row2 {
      width: 100%;
      height: 7px;

      background-color: #0054b8;
    }
  }
`;

export const Main = styled.main`
  .row-hr {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 62px;

    .hr-row {
      width: 90%;
      height: 1px;

      background-color: #58585a;
    }
  }
`;

export const FormContainer = styled.div`
  .form-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.08px;

    /* Azul Hapvida */

    color: #0054b8;

    margin-top: 74px;
    margin-left: 70px;

    width: 100%;
  }

  .form-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.08px;

    color: #5b5b5f;

    margin-left: 70px;
    margin-bottom: 34px;
  }
`;

export const SelectAndBtn = styled.div`
  .button-row {
    width: 100%;

    display: flex;
    justify-content: center;

    padding-bottom: 76px;
  }

  .selects-form-btn {
    width: 335px;
    height: 56px;

    background: #0054b8;
    border-radius: 40px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #ffffff;

    border: none;
    outline: none;
  }
`;

export const SelectsForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 56px;

  margin-bottom: 40px;

  .select-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 16px;

    width: 371px;
    height: 48px;

    color: #0054b8;

    background: #ffffff;

    border: 2px solid #0054b8;
    border-radius: 8px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    outline: none;
  }
`;

export const FormNetwork = styled.div`
  .btn-container-select {
    width: 100%;

    display: flex;
    justify-content: center;

    .selects-search-form-btn {
      width: 335px;
      height: 56px;

      background: #0054b8;
      border-radius: 40px;

      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      text-align: center;

      color: #ffffff;

      border: none;
      outline: none;
    }
  }
  .form-network-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.08px;

    color: #5b5b5f;

    margin-left: 70px;
    margin-bottom: 20px;
  }

  .center-select {
    width: 100%;

    display: flex;
    justify-content: center;
    .select-form-search {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 16px;

      width: 1230px;
      height: 48px;

      color: #0054b8;

      background: #ffffff;

      border: 2px solid #0054b8;
      border-radius: 8px;

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;

      outline: none;

      margin-bottom: 40px;
    }
  }

  .selects-search-form-btn {
    width: 335px;
    height: 56px;

    background: #0054b8;
    border-radius: 40px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;

    color: #ffffff;

    border: none;
    outline: none;

    margin-bottom: 86px;
  }
`;
