import { ReactNode, useState } from 'react'
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
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  return (
    <Container>
      <Header
        isMobile={isOpenMobile}
        onChange={value => setIsOpenMobile(value)}
      />

      <ContentContainer
        style={isOpenMobile === true ? { display: 'none' } : {}}
      >
        <LeftContainer>
          <ItemsWrapper>
            <Hero>
              <img src="/images/Jeanluca2.webp" alt="Foto Jeanluca Moreno" />
            </Hero>
            <TextContainer>
              <Text>{label}</Text>
              <Button
                href="/pdf/Curriculo2022.pdf"
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
