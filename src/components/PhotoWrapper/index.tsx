import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Container } from './styles'

export const PhotoWrapper: React.FC = () => {
  return (
    <Container>
      <img src="./images/Jeanluca.jpg" alt="Foto Jeanluca Moreno" />

      <div className="contentWrapper">
        <h1>Olá, me chamo Jeanluca Moreno!</h1>
        <div className="socialMedia">
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>

      <div className="verticalLine" />

      <div className="logoWrapper">
        <a href="https://monts.com.br/" target="_blank" rel="noreferrer">
          <img src="/logo.svg" alt="Monts." />
          <h1>
            Monts<span className="dot">.</span>
          </h1>
        </a>
      </div>
    </Container>
  )
}
