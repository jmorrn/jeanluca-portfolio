import { ReactNode, useState } from 'react'

import Footer from '@components/Footer'
import { Header } from '@components/Header'

interface ILayout {
  children: ReactNode
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-2 h-full ">
        <div className="h-full flex flex-1 flex-col ml-16 ">
          <img
            src="/images/Jeanluca2.webp"
            alt="Foto Jeanluca Moreno"
            className="object-cover opacity-90 h-full rounded-tr-md rounded-br-md"
          />
        </div>
        <div className="overflow-y-scroll p-6">{children}</div>

        {/* <ContentContainer
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
      </ContentContainer> */}
      </main>
    </>
  )
}

export default Layout
