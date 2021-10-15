import React, { useState } from 'react'

import Icon from '@components/Icon'

import { Container } from './styles'

const Menu: React.FC = () => {
  const [underlineState] = useState({
    objects: [
      { id: 1, title: 'Início' },
      { id: 2, title: 'Conhecimentos' },
      { id: 3, title: 'Portfolio' },
      { id: 4, title: 'Blog' },
    ],
  })

  const [activeState, activeChangeState] = useState({
    activeObject: underlineState.objects[0],
  })

  function toggleActive(index) {
    activeChangeState({
      ...underlineState,
      activeObject: underlineState.objects[index],
    })
  }

  function toggleActiveStyles(index) {
    if (underlineState.objects[index] === activeState.activeObject) {
      return 'active'
    } else {
      return ''
    }
  }

  return (
    <Container>
      <header>
        <img
          src="/images/Jeanluca.jpg"
          alt="Foto de Jeanluca Moreno"
          className="photo"
        />
      </header>
      <ul id="menu">
        {underlineState.objects.map((object, index) => (
          <li key={index}>
            <a
              href="/"
              key={index}
              className={toggleActiveStyles(index)}
              onClick={e => {
                e.preventDefault()
                toggleActive(index)
              }}
            >
              {object.title}
            </a>
          </li>
        ))}
      </ul>
      <ul id="social-medias">
        <a
          href="https://www.linkedin.com/in/jeanlucam/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon iconName="FaLinkedin" className="icon-header"></Icon>
        </a>
        <a
          href="https://github.com/Jeanluca-Moren0"
          target="_blank"
          rel="noreferrer"
        >
          <Icon iconName="FaGithub"></Icon>
        </a>
      </ul>
    </Container>
  )
}

export default Menu
