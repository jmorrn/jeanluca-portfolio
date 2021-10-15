import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
    --black: #121214;
    --footer-black: #151517;
    --blue-100: #007FFF;
    --blue-500: #005AB6;

  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-100);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
