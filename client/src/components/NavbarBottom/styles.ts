import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid #ccccd0;

  display: flex;
  justify-content: center;

  width: 100%;

  .top-menu-content2 {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu-nav {
      display: flex;
      align-items: center;

      .btn-top-nav {
        outline: none;
        border: none;
        background-color: transparent;

        display: flex;
        align-items: center;
      }

      .top-menu-p {
        text-decoration: none;

        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        color: #58585a;
      }
    }
  }

  .top-menu-nav {
    text-decoration: none;

    padding-right: 50px;

    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #58585a;
  }

  .top-container-logo {
    padding-right: 40px;

    padding-top: 5px;
    padding-bottom: 5px;
  }

  .top-menu-btn {
    background: #0054b8;
    border-radius: 40px;

    padding: 12px;

    border: none;

    font-family: "Source Sans Pro";
    font-weight: 600;

    color: white;

    margin-left: 40px;

    text-decoration: none;
  }
`;

export const PositionContent = styled.div`
  max-width: 1100px;
  width: 100%;
`;
