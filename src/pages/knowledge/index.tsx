import Head from 'next/head'

import { Knowledge } from 'src/screens/Knowledge'

const KnowledgePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | Conhecimentos</title>
      </Head>

      <Knowledge />
    </>
  )
}

export default KnowledgePage
