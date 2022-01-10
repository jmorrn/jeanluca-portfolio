import React from 'react'

import { CardContainer, CardInfo } from './styles'

interface ICard {
  title: string
  img: string
  status: string
}

const Card: React.FC<ICard> = ({ title, img, status }) => {
  return (
    <CardContainer>
      <img src={img} alt={title} />
      <CardInfo>
        <h3>{title}</h3>
        <p>{status}</p>
      </CardInfo>
    </CardContainer>
  )
}

export default Card
