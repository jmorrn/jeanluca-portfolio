import styled from 'styled-components'

export const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 4rem 0 4rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--white);
  align-items: center;
  background: var(--footer-black);

  @media (max-width: 720px) {
    padding: 0;
  }

  #gradient {
    width: 100%;
    height: 2px;
    position: absolute;
    background: linear-gradient(
      90deg,
      var(--blue-100) 0%,
      var(--blue-500) 97.62%
    );
    border: none;
    border-radius: 8px 8px 0px 0px;
  }

  p {
    font-size: 1em;
  }

  .develop-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    @media (max-width: 720px) {
      flex-direction: column;
      margin-top: 0;
    }

    .logo-container {
      display: flex;
      flex-direction: row;
      align-items: center;

      .dot-blue {
        font-size: 1.75em;
        font-family: var(--text);
        color: var(--blue-100);
        font-weight: bold;
      }
    }

    #developed {
      font-weight: bold;
      background: linear-gradient(
        180deg,
        var(--blue-100) 0%,
        var(--blue-500) 97.62%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h4 {
      font-size: 1.75em;
      font-family: 'Nunito', sans-serif;
    }

    .logo-monts {
      margin-right: 1rem;
      height: 80px;
    }
  }

  .monts-rights {
    width: 100%;
    text-align: right;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-between;
      padding: 0 1rem;
      font-size: 0.6em;
    }
  }
`
