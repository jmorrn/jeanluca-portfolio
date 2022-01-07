import React, { useEffect } from 'react'

import { api } from 'src/services/api'

import Layout from '@components/Layout'

const Home: React.FC = () => {
  useEffect(() => {
    api.get('blog').then(response => {
      console.log(response.data)
    })
  }, [])
  return (
    <Layout>
      <p>
        Seja bem-vindo(a) ao meu portfólio!! Tenho 19 anos. Esse é o meu segundo
        modelo de portfólio, e o intuito dele é ser um projeto que eu vou me
        empenhando e refatorando com o tempo, ou seja,mais conhecimentos igual
        mais features e menos bugs.
      </p>

      <p>
        Atualmente trabalho como Estágiario de TI no Hospital Sírio Libânes e
        também sou desenvolvedor e um dos fundadores da Monts.
      </p>

      <p>
        Falando um pouco mais do meu começo e objetivos na área de TI,iniciei os
        estudos em 2017, quando queria ainda ser um desenvolvedor de games,
        iniciei estudando HTML, CSS e Javascript. Em 2018, fiz curso técnico na
        área de Desenvolvimento de Sistemas, e conheci todo o mundo de TI como
        conheço hoje, Banco de dados, Front-End, Back-End, Modelagem de dados,
        Estudos de casos, fluxograma, e muito mais! Em 2020, iniciei a faculdade
        em Informática para Negócios, e irei finaliza-lá em 2023.
      </p>

      <p>
        Essa página de início é só um overview das coisas. Espero que gostem do
        conteúdo que vou colocando aqui.
      </p>

      <a
        href="./JeanlucaMorenoC.pdf"
        className="buttonCurriculum"
        target="_blank"
      >
        Currículo
      </a>
    </Layout>
  )
}

export default Home
