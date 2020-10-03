import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
}
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #F5F6F8;
    --green: #51A27E;
  }

  body {
    font-size: 2rem;
    background-color:var(--grey);
  }

`;

export default GlobalStyles;
