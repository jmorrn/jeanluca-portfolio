import React from 'react'

import { CardContainer } from './styles'

interface ICard {
  title: string
  img: string
  status: string
}

const Card: React.FC<ICard> = ({ title, img, status }) => {
  return (
    <CardContainer>
      <img src={img} alt="JavascriptLogo" />
      <h3>{title}</h3>
      <p>{status}</p>
    </CardContainer>
  )
}

export default Card
