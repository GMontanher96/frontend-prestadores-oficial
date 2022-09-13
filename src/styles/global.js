import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    width: 100vw;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif
}

label {
    text-align: center;
}
`;

export default GlobalStyle;