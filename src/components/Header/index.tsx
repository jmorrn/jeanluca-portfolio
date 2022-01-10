import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="menuContent">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/knowledge">Conhecimentos</a>
          </li>
          <li>
            <a href="/projects">Projetos</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
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
        </ul>
      </div>
    </Container>
  )
}
