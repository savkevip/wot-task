import { createGlobalStyle } from "styled-components";
import colors from "./utils/colors";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100% !important;
  }
  body {
    margin: 0 auto !important;
    padding: 0 !important;
    overflow-x: hidden;
    font-family: 'Calibri' !important;
    color: ${colors.font};
    background-color: ${colors.main};
    max-width: 1440px;
    font-size: 24px;
  }
`;
