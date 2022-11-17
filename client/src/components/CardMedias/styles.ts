import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  /* height: 388px; */

  background-color: #ffffff;

  border-radius: 10px;

  box-shadow: 8px -1px 20px 2px rgb(0, 0, 0, 0.25);

  .card-content-img {
    border-radius: 10px;

    padding-top: 15px;

    width: 100%;
  }

  .card-medias-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;

    color: #f39a00;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .card-medias-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    color: #58585a;

    padding-bottom: 10px;
    padding-left: 10px;
  }
`;
