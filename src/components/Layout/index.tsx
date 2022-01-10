import { ReactNode } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'

import { Header } from '@components/Header'

import {
  Container,
  ContentContainer,
  RightContainer,
  LeftContainer,
  ItemsWrapper,
  Hero,
  Content,
  TextContainer,
  Button,
  Text,
  LogoContainer,
} from './styles'

interface ILayout {
  children: ReactNode
  label: string
}

const Layout: React.FC<ILayout> = ({ children, label }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <LeftContainer>
          <ItemsWrapper>
            <Hero>
              <img src="/images/Jeanluca3.jpg" alt="Foto Jeanluca Moreno" />
            </Hero>
            <TextContainer>
              <Text>{label}</Text>
              <Button
                href="/pdf/JeanlucaMorenoC.pdf"
                className="buttonCurriculum"
                target="_blank"
              >
                <MdOutlineFileDownload />
                Currículo
              </Button>
            </TextContainer>

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
        <RightContainer>
          <Content>{children}</Content>
        </RightContainer>
      </ContentContainer>
    </Container>
  )
}

export default Layout
