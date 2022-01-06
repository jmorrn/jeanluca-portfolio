import Head from 'next/head'

import Posts from 'src/screens/Posts'
import { api } from 'src/services/api'

const data = api.get('blog')

export async function getStaticPaths() {
  const dataResolved = await data.then(response => response.data)

  const paths = dataResolved.map(data => {
    const replaceData = data.id

    return {
      params: { posts: replaceData },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.posts
  const dataResolved = await data.then(response => response.data)

  const posts = dataResolved.find(post => post.id === slug)

  console.log(slug)

  return {
    props: { posts: posts },
  }
}

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

const PostsPage: React.FC<IPostProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | {posts.title}</title>

        <meta name="description" content={posts.description} />
      </Head>

      <Posts posts={posts} />
    </>
  )
}

export default PostsPage
