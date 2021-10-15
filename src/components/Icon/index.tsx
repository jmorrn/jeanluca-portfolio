import React from 'react'
import * as FontA from 'react-icons/fa'

const Icon = props => {
  const { iconName } = props
  const icon = React.createElement(FontA[iconName])
  return <>{icon}</>
}

export default Icon
