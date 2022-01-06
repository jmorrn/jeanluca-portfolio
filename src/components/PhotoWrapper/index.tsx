import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Container } from './styles'

export const PhotoWrapper: React.FC = () => {
  return (
    <Container>
      <div className="photoWrapper">
        <div className="hero">
          <img src="/images/Jeanluca.jpg" alt="Foto Jeanluca Moreno" />
        </div>

        <div className="contentWrapper">
          <h1>Olá, me chamo Jeanluca Moreno!</h1>
          <div className="socialMedia">
            <a
              href="https://github.com/Jeanluca-Moren0"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jeanlucam/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="Line" />

        <div className="logoWrapper">
          <a href="https://monts.com.br/" target="_blank" rel="noreferrer">
            <img src="/logo.svg" alt="Monts." />
            <h1>
              Monts<span className="dot">.</span>
            </h1>
          </a>
        </div>
      </div>
    </Container>
  )
}
