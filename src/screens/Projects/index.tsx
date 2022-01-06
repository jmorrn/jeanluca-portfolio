import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Figure from '@components/Figure'
import { Header } from '@components/Header'
import { PhotoWrapper } from '@components/PhotoWrapper'

import { Container } from './styles'

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Jeanluca-Moren0/repos')
      .then(response => {
        setProjects(response.data.filter(project => !project.fork))
        console.log(response.data)
      })
  }, [])

  return (
    <Container>
      <Header />
      <div className="content">
        <div className="rightContent">
          <p style={{ marginBottom: '1rem' }}>
            Repositórios disponíveis no meu GitHub. Em breve mais projetos!{' '}
            <span role="img" aria-label="happy">
              😄
            </span>
          </p>
          {projects.map(project => (
            <Figure key={project.id} project={project} />
          ))}
        </div>
        <PhotoWrapper />
      </div>
    </Container>
  )
}
