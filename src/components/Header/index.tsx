import React from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

import { Container } from './styles'

export interface IHeaderProps {
  isMobile: boolean
  onChange?
}

export const Header: React.FC<IHeaderProps> = props => {
  return (
    <Container isMobile={props.isMobile}>
      <div className="menuContent">
        <div
          className="mobileHeader"
          onClick={() => props.onChange(!props.isMobile)}
          onKeyDown={() => props.onChange(!props.isMobile)}
          role="menuitem"
          tabIndex={0}
        >
          {props.isMobile === false ? <FaBars /> : <FaTimes />}
        </div>
        <ul>
          <li>
            <a href="/">Início</a>
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
