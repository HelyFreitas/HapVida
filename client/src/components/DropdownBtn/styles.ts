import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  .buttonDrop {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  &:hover .dropdown-content {
    display: block;
  }

  &:hover .buttonDrop {
    background-color: #3e8e41;
  }
`;

// export const DropBtn = styled.button`
//   background-color: #04aa6d;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;

//   &:hover {
//     background-color: #3e8e41;
//   }
// `;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Link1 = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export const Link2 = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export const Link3 = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;
