import React from 'react'

import Icon from '@components/Icon'

import { Container } from './styles'

interface IButton {
  title: string
  color: string
  icon: string
}

const Button: React.FC<IButton> = (
  { title, color, icon } = {} as { title: string; color: string; icon: string }
) => {
  return (
    <Container type="button" style={{ background: color }}>
      {title}
      <Icon iconName={icon} />
    </Container>
  )
}

export default Button
