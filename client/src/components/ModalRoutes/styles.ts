import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;

  border-radius: 7px;

  position: fixed;
  top: 76px;
  left: 898px;

  width: 190px;
  height: 194px;

  z-index: 1;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .links-drop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 20px;
  }

  .links-modal-routes {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    /* Cinza GNDI */

    color: #58585a;

    text-decoration: none;

    display: flex;
    justify-content: center;
  }
`;
