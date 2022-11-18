import styled from "styled-components";

export const Container = styled.div`
  .divisorContent {
    width: 100%;
    height: 10px;

    background-color: #0054b8;

    margin-bottom: 46px;
  }

  .cards-container {
    margin-top: 78px;
  }

  .cards-provider {
    display: flex;
    justify-content: space-between;

    padding-bottom: 114px;

    margin-top: 80px;
  }
`;

export const Content1 = styled.div`
  display: flex;
  justify-content: center;

  border-top: 7px solid #0054b8;
`;

export const TitleContent = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 0.08px;

  padding-top: 76px;
  padding-bottom: 44px;

  color: #0054b8;
  
  display: flex;
  padding-top: 76px;
`;

export const Content1Container = styled.div``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  gap: 20px;
  align-items: center;
`;

export const FormInputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
`;

export const InputName = styled.input`
  width: 355px;
  height: 64px;

  border: 1px solid #0054b8;
  border-radius: 10px;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.2px;

  /* Branding/Hapvida_Blue */

  color: #0054b8;

  padding-left: 12px;

  &::placeholder {
    color: #0054b8;
  }
`;

export const InputEmail = styled.input`
  width: 355px;
  height: 64px;

  border: 1px solid #0054b8;
  border-radius: 10px;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.2px;

  color: #0054b8;

  padding-left: 12px;

  &::placeholder {
    color: #0054b8;
  }
`;

export const InputCell = styled.input`
  width: 355px;
  height: 64px;

  border: 1px solid #0054b8;
  border-radius: 10px;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.2px;

  color: #0054b8;

  padding-left: 12px;

  &::placeholder {
    color: #0054b8;
  }
`;

export const FormSelects = styled.div`
  display: flex;
  width: 85%;
  /* justify-content: space-around; */
  gap: 60px;
  justify-content: center;
`;

export const SelectState = styled.select`
  width: 355px;
  height: 66px;

  background: #ffffff;

  border: 1px solid #0054b8;
  border-radius: 8px;

  color: #0054b8;
`;
export const SelectCity = styled.select`
  width: 355px;
  height: 66px;

  background: #ffffff;

  border: 1px solid #0054b8;
  border-radius: 8px;

  color: #0054b8;
`;

export const Options1 = styled.option``;
export const Options2 = styled.option``;

export const FormBtn = styled.button`
  width: 335px;
  height: 56px;

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

  margin-top: 20px;
  margin-bottom: 112px;
`;

export const ContentCards = styled.div`
  display: flex;
  justify-content: center;
`;

export const AlignContent = styled.div`
  max-width: 1100px;
  width: 100%;
`;
