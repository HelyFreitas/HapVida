import * as V from "./styles";
import VidBackButton from "../../assets/vidbutton.png";

export const VidMain = () => {
  return (
    <V.Container>
      <div className="vid">
        <img src={VidBackButton} className="vid-btn" />
      </div>
    </V.Container>
  );
};
