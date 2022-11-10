import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content1-card,
  .content2-card {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    margin-bottom: 104px;
    gap: 100px;
  }

  .content3-card {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    gap: 120px;
    padding-bottom: 105px;
  }

  .cards-sect {
    position: relative;
    /* width: 140px;
    height: 140px; */

    .card-div {
      width: 140px;
      height: 140px;

      background-color: #ffffff;
      box-shadow: 0px -3px 7px 2px rgba(0, 0, 0, 0.25);
      border-radius: 36px;
      transform: rotate(45deg);

      margin-bottom: 30px;
    }

    .client-png {
      position: absolute;
      top: 70px;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .cards-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    text-align: center;

    color: #db6e2d;
  }

  .cards-paragraph {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 19.7174px;
    line-height: 25px;

    text-align: center;

    color: #58585a;
  }
`;
