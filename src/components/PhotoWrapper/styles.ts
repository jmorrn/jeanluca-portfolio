import styled from 'styled-components'

export const Container = styled.aside`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 50vw;

  > img {
    object-fit: cover;
    height: 100vh;
    opacity: 0.6;
    width: 50vw;
    filter: saturate(1.1) contrast(1.1);
  }

  .verticalLine {
    border-right: 3px solid var(--white);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
  }

  .contentWrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .socialMedia {
      width: 100%;
      max-width: 627px;
      display: flex;
      justify-content: flex-end;
      svg {
        width: 36px;
        height: 36px;
        margin-top: 1rem;
        :nth-child(1) {
          margin-right: 0.5rem;
        }
      }
    }

    h1 {
      font-size: 2.25em;
      text-align: center;
    }
  }

  .logoWrapper {
    width: 100%;
    height: 120px;

    position: absolute;
    bottom: 0;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 120px;
        margin-right: 1rem;
      }

      h1 {
        font-family: 'Nunito', sans-serif;
        font-size: 2.25em;

        .dot {
          font-size: 1.5em;
          color: var(--dark-gray);
        }
      }
    }
  }
`
