import React from 'react'

import Head from 'next/head'

import Home from 'src/screens/Home'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | Portfólio</title>
      </Head>

      <Home />
    </>
  )
}

export default HomePage
