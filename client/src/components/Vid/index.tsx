import * as V from "./styles";
import VidBackButton from "../../assets/vidbutton.png";

export const Vid = () => {
  return (
    <V.Container>
      <div className="vid1">
        <img src={VidBackButton} className="vid1-btn" />
      </div>
    </V.Container>
  );
};
