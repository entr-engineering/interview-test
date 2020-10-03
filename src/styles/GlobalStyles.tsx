import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #F5F6F8;
  }

  body {
    font-size: 2rem;
    background-color:var(--grey)
  }

`;

export default GlobalStyles;
