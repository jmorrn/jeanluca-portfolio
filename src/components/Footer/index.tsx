import React from 'react'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <hr id="gradient" />

      <div className="develop-container">
        <a href="https://www.monts.com.br/" target="_blank" rel="noreferrer">
          <div className="logo-container">
            <img src="/logo.svg" alt="Logo Monts" className="logo-monts" />
            <h4>Monts</h4>
            <span className="dot-blue">.</span>
          </div>
        </a>

        <div className="monts-rights">
          <p id="developed">Desenvolvido por: Jeanluca Moreno</p>
          <p>Montssign © Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  )
}

export default Footer
