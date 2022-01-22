import React from 'react'

import { FigureContainer } from './styles'

interface IFigureProps {
  project: {
    name: string
    description: string
    html_url: string
    owner: {
      avatar_url: string
      login: string
    }
  }
}

const Figure: React.FC<IFigureProps> = ({ project }) => {
  const { description, name, owner, html_url } = project
  return (
    <FigureContainer href={html_url} target="_blank" rel="noreferrer">
      <img src={owner.avatar_url} alt={owner.login} />
      <div className="Line" />
      <div className="textContent">
        <h3>{name}</h3>
        {!description ? (
          <p className="noDescription">Esse projeto não tem descrição.</p>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </FigureContainer>
  )
}

export default Figure
