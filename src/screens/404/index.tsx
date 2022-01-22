import React from 'react'

import Layout from '@components/Layout'

import { ImageError, ImageWrapper } from './styles'

const Error404: React.FC = () => {
  return (
    <Layout label="Não temos esse conteúdo aqui!">
      <a href="https://storyset.com/web" target="_blank" rel="noreferrer">
        <ImageWrapper>
          <ImageError src="/images/404-Error.gif" alt="GIF by StorySet" />
        </ImageWrapper>
      </a>
    </Layout>
  )
}

export default Error404
