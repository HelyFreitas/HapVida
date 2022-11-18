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
  display: flex;
  justify-content: center;

  .row-hr {
    width: 100%;

    margin-bottom: 62px;

    .hr-row {
      width: 100%;
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
  }

  .form-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.08px;

    color: #5b5b5f;

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
    width: 340px;
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
  justify-content: space-between;

  margin-bottom: 40px;

  .select-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    /* padding: 10px 230px 10px 10px; */

    gap: 16px;

    width: 340px;
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

    margin-bottom: 20px;
  }

  .center-select {
    .select-form-search {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 12px;
      gap: 16px;

      width: 100%;
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

export const AlignContent = styled.div`
  max-width: 1100px;
  width: 100%;
`;
