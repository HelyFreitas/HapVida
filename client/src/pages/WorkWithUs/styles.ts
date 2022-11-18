import styled from "styled-components";

export const Container = styled.div``;

export const Content1 = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 104px;
`;

export const Title = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -1.42px;

  /* Azul Hapvida */

  color: #0054b8;

  margin-top: 74px;
  margin-bottom: 32px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 456px;
  height: 180px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: #ffffff;

  border: 1px solid #c0c0c0;
  border-left: 10px solid #0054b8;
  border-radius: 10px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitleCard = styled.h2`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.08px;

  color: #0054b8;
`;

export const TitleCard = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.08px;

  color: #0054b8;
`;

export const BtnCard = styled.button`
  background-color: transparent;

  border: none;
  outline: none;
`;

export const AlignContent = styled.div`
  max-width: 1100px;
  width: 100%;
`;
