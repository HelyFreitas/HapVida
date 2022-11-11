import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid #ccccd0;

    .top-menu-content1 {
      display: flex;

      width: 100%;

      background-color: #000000;

      justify-content: right;
      padding-right: 110px;

      .top-menu-content1-p {
        color: #ffffff;

        padding-right: 5px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;

        display: flex;
        align-items: center;
      }
    }

    .top-menu-content2 {
      display: flex;
      align-items: center;
      justify-content: center;

      .itens-nav {
        display: flex;

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

            padding-right: 8px;
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
    }

    .top-menu-btn {
      background: #0054b8;
      border-radius: 40px;

      padding: 12px;

      border: none;

      font-weight: 600;

      color: white;

      margin-left: 40px;
    }
`;
