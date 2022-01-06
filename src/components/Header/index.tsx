import React from 'react'

import { Container } from './styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="menuContent">
        <ul>
          <li>
            <a href="/">
              Home{' '}
              <span role="img" aria-label="Home">
                🏠
              </span>
            </a>
          </li>
          <li>
            <a href="/knowledge">
              Conhecimentos{' '}
              <span role="img" aria-label="Books">
                📚
              </span>
            </a>
          </li>
          <li>
            <a href="/projects">
              Projetos{' '}
              <span role="img" aria-label="Laptop">
                💻
              </span>
            </a>
          </li>
          <li>
            <a href="/blog">
              Blog{' '}
              <span role="img" aria-label="Newspaper">
                📰
              </span>
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </Container>
  )
}
