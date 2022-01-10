import React, { useState } from 'react'

import knowledges from '@assets/data/knowledge.json'
import Card from '@components/Card'
import Layout from '@components/Layout'

import { Filter, CardContent } from './styles'

const allCategories = [
  'Todos',
  ...new Set(knowledges.map(knowledge => knowledge.status)),
]

export const Knowledge: React.FC = () => {
  const [items, setItems] = useState(knowledges)
  const [button] = useState(allCategories)
  const [active, setActive] = useState('Todos')

  const filter = button => {
    if (button === 'Todos') {
      setItems(knowledges)
      return
    }

    const filteredData = knowledges.filter(
      knowledge => knowledge.status === button
    )
    setItems(filteredData)
  }

  return (
    <Layout label="Meus conhecimentos.">
      <Filter>
        <p>Filtros: </p>

        {button?.map((btn, index) => (
          <button
            className={active === btn ? 'active' : null}
            key={index}
            onClick={() => {
              setActive(btn)
              filter(btn)
            }}
          >
            {btn}
          </button>
        ))}
      </Filter>

      <CardContent>
        {items.map(item => (
          <Card
            title={item.Tech}
            img={item.logo}
            status={item.status}
            key={item.id}
          />
        ))}
      </CardContent>
    </Layout>
  )
}
