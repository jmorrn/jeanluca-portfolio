import React, { useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import Home from 'src/screens/Home'

const HomePage: React.FC = () => {
  const { asPath, push } = useRouter()

  useEffect(() => {
    if (asPath !== '/') {
      push('/404')
    }
  }, [asPath, push])

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
