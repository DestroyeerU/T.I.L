import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: #202020;
  }

  *, button, input {
    border: 0;
    outline: 0;
    background: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

`;
