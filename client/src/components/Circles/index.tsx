import * as C from "./styles"

import Circle from "../../assets/circle.png";
import CircleBlue from "../../assets/circleBlue.png";

export const Circles = () => {
  return (
    <C.CirclesContainer>
      <img src={CircleBlue} alt="" />
      <img src={Circle} alt="" />
      <img src={Circle} alt="" />
      <img src={Circle} alt="" />
      <img src={Circle} alt="" />
    </C.CirclesContainer>
  );
};
