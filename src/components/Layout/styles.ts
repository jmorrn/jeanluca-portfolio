import styled from 'styled-components'

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 40vw 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 0;
    grid-template-rows: 50vw 50vw;
  }
`
const RightContainer = styled.div`
  width: 60vw;
  height: calc(100vh - 142px);
  position: absolute;
  right: 0;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 50vh;
    right: none;
    bottom: 0;
  }
`

const LeftContainer = styled.aside`
  width: 40vw;
  position: relative;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 50vh;
  }
`
const ItemsWrapper = styled.div`
  width: 40vw;
  height: 100%;
  position fixed;
  top: 0;

  @media (max-width: 1024px) {
    height: 100vh;
    position: relative;
  }
`
const Hero = styled.div`
  margin: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  border-right: 1px solid var(--white);

  @media (max-width: 1024px) {
    height: 50%;
    border-right: 0;
    border-bottom: 1px solid var(--white);
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 100vh;
    opacity: 0.6;
    width: 40vw;
    filter: saturate(1.1) contrast(1.1);
    @media (max-width: 1024px) {
      height: 50vh;
      width: 100vw;
    }
  }
`

const Content = styled.div`
  padding: 0 2.5rem;

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }
`

const TextContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    width: 100vw;
    height: 50%;
  }
`

const Button = styled.a`
  align-self: flex-start;

  max-width:calc(150px + 4px);
  border-radius: 5px;
  border 1px solid var(--white);
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding: 1em 2em;

  @media (max-width: 1024px) {
    align-self: center;
  }

  background: var(--black);
  color: var(--white);
  text-align: center;

  > svg{

    margin-right: 4px;
  }
`

const Text = styled.h1`
  font-size: 2rem;
  @media (max-width: 1185px) {
    font-size: 1.5rem;
  }

  @media (max-width: 318px) {
    text-align: center;
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  font-weight: bold;
  bottom: 0;
  width: 100%;

  @media (max-width: 1024px) {
    bottom: 50%;
    width: 100vw;
  }

  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      max-width: 45px;
      margin-right: 0.5rem;
    }
    h1 {
      font-family: 'Nunito', sans-serif;
      font-size: 1.25em;

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
  Content,
  Text,
  Button,
  TextContainer,
  LogoContainer,
}
