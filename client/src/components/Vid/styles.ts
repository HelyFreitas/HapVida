import styled from "styled-components";
import VidVid from "../../assets/vidback.png";

export const Container = styled.div`
    .vid1{
        background-image: url(${VidVid});
        background-repeat: no-repeat;
        background-size: cover;

        width: 550px;
        height: 345px;

        position: relative;

        /* margin-left: 85px; */
        margin-top: 18px;

        .vid1-btn{
            position: absolute;
            top: 51%;
            left: 60%;
            transform: translate(-50%, -50%);

            width: 80px;
            height: 80px;
        }
    }
`;