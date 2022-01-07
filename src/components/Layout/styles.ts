import styled from 'styled-components'

const Container = styled.main`
  position: relative;
  min-height: 100vh;
`
const ContentContainer = styled.div`
  display: block;

  @media (max-width: 792px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
const RightContainer = styled.div`
    width: 50%;
    position: absolute;
    right: 0;

    @media (max-width: 792px) {
      width: 100%;
      margin-top: 0;
      position: initial;
    }

    padding: 2.25rem;
    margin-top: 5rem;

    p {
      margin-top: 0.5rem;
      font-size: 18px;
      line-height: 1.25;
      @media (max-width: 792px) {
        font-size: 16px;
      }
    }

    .buttonCurriculum {
      display: block;
      width: 200px;
      float: right;
      text-align: center;
      font-size: 16px;

      padding: 1rem;
      margin-top: 1rem;

      border: 3px solid var(--light-gray);
      border-radius: 100px;

      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }
`

const LeftContainer = styled.aside`
  min-height: 50vh;
  width: 50vw;
  position: relative;
`
const ItemsWrapper = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 50vw;

  @media (max-width: 792px) {
    position: absolute;
    height: 50vh;
    width: 100vw;
  }

  .Line {
    border: 1px solid var(--white);
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 792px) {
      height: 0;
      width: 100%;
      top: initial;
      bottom: 0;
    }
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
      max-width: 67%;
      display: flex;
      justify-content: flex-end;
      svg {
        width: 36px;
        height: 36px;
        margin-top: 1rem;
        :nth-child(1) {
          margin-right: 0.5rem;
        }

        @media (max-width: 600px) {
          width: 24px;
          height: 24px;
        }
      }

      @media (max-width: 600px) {
        justify-content: center;
      }
    }

    h1 {
      font-size: 2.25em;
      text-align: center;
      @media (max-width: 600px) {
        font-size: 1.5em;
      }

      @media (max-width: 366px) {
        font-size: 1.2em;
      }
    }
  }

  .logoWrapper {
    width: 100%;
    height: 100px;

    @media (max-width: 600px) {
      height: 80px;
    }

    position: absolute;
    bottom: 0;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        max-width: 100px;
        margin-right: 1rem;

        @media (max-width: 600px) {
          max-width: 80px;
        }
      }

      h1 {
        font-family: 'Nunito', sans-serif;
        font-size: 2em;

        @media (max-width: 600px) {
          font-size: 1.5em;
        }

        .dot {
          font-size: 1.5em;
          color: var(--dark-gray);
        }
      }
    }
  }
`
const Hero = styled.div`
  margin: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  img {
    object-fit: cover;
    height: 100vh;
    opacity: 0.6;
    width: 50vw;
    filter: saturate(1.1) contrast(1.1);

    @media (max-width: 792px) {
      height: 50vh;
      width: 100vw;
    }
  }
`
const Text = styled.h1`
  text-align: center;
`
const Line = styled.div`
  border: 1px solid var(--white);
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 792px) {
    height: 0;
    width: 100%;
    top: initial;
    bottom: 0;
  }
`
const LogoContainer = styled.div`
  width: 100%;
  height: 100px;

  @media (max-width: 600px) {
    height: 80px;
  }

  position: absolute;
  bottom: 0;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 100px;
      margin-right: 1rem;

      @media (max-width: 600px) {
        max-width: 80px;
      }
    }

    h1 {
      font-family: 'Nunito', sans-serif;
      font-size: 2em;

      @media (max-width: 600px) {
        font-size: 1.5em;
      }

      .dot {
        font-size: 1.5em;
        color: var(--dark-gray);
      }
    }
  }
`

export {
  Container,
  ContentContainer,
  RightContainer,
  LeftContainer,
  ItemsWrapper,
  Hero,
  Text,
  Line,
  LogoContainer,
}
