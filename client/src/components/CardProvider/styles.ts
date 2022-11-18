import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  width: 451px;
  height: auto;

  background: #ffffff;
  border: 1px solid #c0c0c0;
  border-left: 10px solid #0054b8;
  border-radius: 10px;
`;

export const Texts = styled.div`
  padding-left: 25px;
`;

export const Subtitle = styled.h2`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.08px;

  /* Branding/Hapvida_Blue */

  color: #0054b8;

  padding-top: 20px;

`;

export const Title = styled.h1`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.08px;

  /* Branding/Hapvida_Blue */

  color: #0054b8;

`;

export const Paragraph = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  /* Neutral / Gray 1 */

  color: #5b5b5f;

  padding: 0 0 10px 0;
`;

export const Links = styled.div`
  .links {
    display: flex;

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

    border-top: 1px solid #cccccc;

    padding: 16px 25px;
  }
`;
