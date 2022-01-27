import React from 'react'

import Head from 'next/head'

import Error404 from 'src/screens/404'

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | 404</title>
      </Head>
      <Error404 />
    </>
  )
}

export default Custom404
