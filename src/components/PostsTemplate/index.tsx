import React from 'react'

import { Container } from './styles'

interface IPostProps {
  post: {
    title: string
    description: string
    created_at: string
  }
}

const PostsTemplate: React.FC<IPostProps> = ({ post }) => {
  const { created_at, description, title } = post

  return (
    <>
      <Container>
        <h1>{title}</h1>
        <span>
          Postado em:{' '}
          <time dateTime={created_at}>{created_at.split('T')[0]}</time>
        </span>

        <p>{description}</p>
      </Container>

      <hr style={{ marginTop: '1.5rem' }} />
    </>
  )
}

export default PostsTemplate
