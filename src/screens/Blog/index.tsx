import React, { useEffect, useState } from 'react'

import { api } from 'src/services/api'

import Layout from '@components/Layout'
import PostsTemplate from '@components/PostsTemplate'

export const Blog: React.FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    api.get('blog').then(response => {
      setPosts(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <Layout label="Meu blog.">
      {posts.map(post => (
        <a href={`/posts/${post.id}`} key={post.id}>
          <PostsTemplate post={post} />
        </a>
      ))}
    </Layout>
  )
}
