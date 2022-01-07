import { Header } from '@components/Header'

import {
  Container,
  ContentContainer,
  RightContainer,
  LeftContainer,
  ItemsWrapper,
  Hero,
  Text,
  Line,
  LogoContainer,
} from './styles'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <RightContainer>{children}</RightContainer>
        <LeftContainer>
          <ItemsWrapper>
            <Hero>
              <img src="/images/Jeanluca.jpg" alt="Foto Jeanluca Moreno" />
            </Hero>
            <Text>Olá, me chamo Jeanluca Moreno!</Text>
            <Line />
            <LogoContainer>
              <a href="https://monts.com.br/" target="_blank" rel="noreferrer">
                <img src="/logo.svg" alt="Monts." />
                <h1>
                  Monts<span className="dot">.</span>
                </h1>
              </a>
            </LogoContainer>
          </ItemsWrapper>
        </LeftContainer>
      </ContentContainer>
    </Container>
  )
}

export default Layout
