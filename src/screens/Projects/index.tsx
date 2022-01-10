import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Figure from '@components/Figure'
import Layout from '@components/Layout'

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
    <Layout label="Meus projetos.">
      <p style={{ fontSize: '1.25em', marginBottom: '1rem' }}>
        Repositórios disponíveis no meu GitHub. Em breve mais projetos!{' '}
        <span role="img" aria-label="happy">
          😄
        </span>
      </p>
      {projects.map(project => (
        <Figure key={project.id} project={project} />
      ))}
    </Layout>
  )
}
