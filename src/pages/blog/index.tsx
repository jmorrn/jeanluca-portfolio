import Head from 'next/head'

import { Blog } from 'src/screens/Blog'

const BlogPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | Blog</title>
      </Head>

      <Blog />
    </>
  )
}

export default BlogPage
