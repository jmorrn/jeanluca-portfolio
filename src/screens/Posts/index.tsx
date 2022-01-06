import React from 'react'

import { Header } from '@components/Header'
import { PhotoWrapper } from '@components/PhotoWrapper'

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
  console.log(posts)
  return (
    <Container>
      <Header />
      <div className="content">
        <div className="rightContent">
          <h1 className="postTitle">{posts.title}</h1>
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
        </div>
        <PhotoWrapper />
      </div>
    </Container>
  )
}

export default Posts
