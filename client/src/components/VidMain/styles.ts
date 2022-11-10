import styled from "styled-components";
import VidBack from "../../assets/vid.png";

export const Container = styled.div`
    .vid{
        background-image: url(${VidBack});
        background-repeat: no-repeat;
        background-size: cover;

        width: 650px;
        height: 345px;

        position: relative;

        margin-left: 85px;
        margin-top: 18px;

        .vid-btn{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 80px;
            height: 80px;
        }
    }
`;