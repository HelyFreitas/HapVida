import * as C from "./styles";

interface ButtonProps {
    text : string | any;
}

export const ButtonMedias = (props : ButtonProps) => {
    return(
        <C.Container>
            <C.Button>{props.text}</C.Button>
        </C.Container>
    );
}