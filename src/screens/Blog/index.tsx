import React, { useEffect, useState } from 'react'

import { api } from 'src/services/api'

import { Header } from '@components/Header'
import { PhotoWrapper } from '@components/PhotoWrapper'
import PostsTemplate from '@components/PostsTemplate'

import { Container } from './styles'

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    api.get('blog').then(response => {
      setPosts(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Container>
      <Header />
      <div className="content">
        <div className="rightContent">
          {posts.map(post => (
            <a href={`/posts/${post.id}`} key={post.id}>
              <PostsTemplate post={post} />
            </a>
          ))}
        </div>
        <PhotoWrapper />
      </div>
    </Container>
  )
}
