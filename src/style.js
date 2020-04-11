import { createGlobalStyle } from "styled-components";
import CalibriRegular from './assets/fonts/CalibriRegular.ttf';
import colors from "./utils/colors";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibri';
    src: local('Calibri'), local('Calibri'),
    url(${CalibriRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  html {
    height: 100% !important;
  }
  body {
    margin: 0 auto !important;
    padding: 0 !important;
    font-family: 'Calibri' !important;
    color: ${colors.font};
    background-color: ${colors.main};
    max-width: 1440px;
    font-size: 24px;
  }
`;
