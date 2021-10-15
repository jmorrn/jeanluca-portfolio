import React from 'react'

import Button from '@components/Button'
import Footer from '@components/Footer'
import Menu from '@components/Menu'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <section className="container">
        <Menu />
        <div className="content">
          <h1>
            Olá, me chamo{' '}
            <span className="blue-gradient"> Jeanluca Moreno</span>!
          </h1>
          <p className="blue-gradient" id="vision">
            Visão geral
          </p>
          <p>hello world</p>
          <Button
            title="Currículo"
            color="var(--white)"
            icon="FaFileDownload"
          />
        </div>
      </section>
      <Footer />
    </Container>
  )
}

export default Home
