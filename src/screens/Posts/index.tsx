import React from 'react'

import Layout from '@components/Layout'

import { Container } from './styles'

interface IPostProps {
  posts: {
    id: string
    title: string
    text: string
    description: string
    created_at: string
    author_name: string
    author_avatar_url: string
  }
}

const Posts: React.FC<IPostProps> = ({ posts }) => {
  return (
    <Layout label={posts.title}>
      <Container>
        <p className="postDescription">{posts.description}</p>

        <p className="postContent">{posts.text}</p>

        <hr />
        <div className="timenAuthor">
          <div className="author">
            <img src={posts.author_avatar_url} alt={posts.author_name} />
            <p>{posts.author_name}</p>
          </div>
          <span>
            Postado em:{' '}
            <time dateTime={posts.created_at}>
              {posts.created_at.split('T')[0]}
            </time>
          </span>
        </div>
      </Container>
    </Layout>
  )
}

export default Posts
