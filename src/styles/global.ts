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
    --light-gray: #E1E1E6;
    --dark-gray: #29292E;

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
    background: var(--black);
    color: var(--light-gray);
  }


  #__next{
    max-width: 100%
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


  
::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background: var(--dark-gray);
}


::-webkit-scrollbar-thumb {
  background: var(--light-gray);

}


`
