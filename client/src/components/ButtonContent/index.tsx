import * as C from "./styles";

interface BtnProps {
    text : string;
}

export const ButtonContent = (props : BtnProps) => {
    return(
        <C.Button>
            {props.text}
        </C.Button>
    );
}