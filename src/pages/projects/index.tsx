import Head from 'next/head'

import { Projects } from 'src/screens/Projects'

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Jeanluca Moreno | Projetos</title>
      </Head>

      <Projects />
    </>
  )
}

export default ProjectsPage
