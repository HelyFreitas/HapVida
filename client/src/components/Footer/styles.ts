import styled from "styled-components";

export const Container = styled.div`
  border-top: 7px solid #0054b8;
  padding-top: 45px;
`;

export const Content = styled.div`
  margin-bottom: 46px;

  .img-footer {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 36px;
  }
  .cont {
    display: flex;
    align-items: center;
    justify-content: center;

    .row-content {
      display: flex;
      align-items: center;
      align-self: flex-start;

      .links-footer {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;

        letter-spacing: -0.022em;
        text-decoration: none;

        color: #0054b8;

        flex: none;
        order: 0;
        flex-grow: 0;

        padding-left: 45px;

        display: flex;
        align-items: center;
      }
    }

    .column-content {
      .p-content-footer {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;

        letter-spacing: -0.022em;
        text-decoration-line: underline;

        color: #0054b8;

        flex: none;
        order: 0;
        flex-grow: 0;

        text-decoration: none;

        display: flex;
        align-items: center;
      }

      .links-column-content {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;

        letter-spacing: -0.022em;
        text-decoration-line: underline;

        color: #0054b8;

        text-decoration: none;

        flex: none;
        order: 0;
        flex-grow: 0;
      }

      display: flex;
      flex-direction: column;

      gap: 14px;
    }
  }
`;

export const FooterContent = styled.footer`
  width: 100%;

  background-color: #555555;

  .div-one {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div-two {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 38px;
  }
`;
