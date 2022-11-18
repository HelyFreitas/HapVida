import styled from "styled-components";
import VidBack from "../../assets/vid.png";

export const Container = styled.div`
  width: 100%;

  .vid {
    background-image: url(${VidBack});
    background-repeat: no-repeat;
    background-size: cover;

    max-width: 1300px;
    width: 100%;
    height: 664px;

    position: relative;

    margin-top: 18px;

    .vid-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 80px;
      height: 80px;
    }
  }
`;
