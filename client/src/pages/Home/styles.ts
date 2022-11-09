import styled from "styled-components";

export const Container = styled.div`
  .top-menu {
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

    .top-menu-content2{
        display: flex;
        align-items: center;

        .top-menu-a{
            text-decoration: none;

            padding-right: 80px;
        }
    }
  }
`;

export const Header = styled.header``;
