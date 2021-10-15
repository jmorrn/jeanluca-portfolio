import styled from 'styled-components'

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;

  background: var(--black);

  .container {
    width: 100%;
    margin: 0px auto;
    height: calc(100vh - 100px);
    max-width: 1440px;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
    max-width: 1064px;
    padding: 1rem 3rem;
    margin: 0 auto;
    h1 {
      font-size: 3rem;
    }

    #vision {
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .blue-gradient {
      background: linear-gradient(
        180deg,
        var(--blue-100) 0%,
        var(--blue-500) 97.62%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.09em;
    }
  }
`
