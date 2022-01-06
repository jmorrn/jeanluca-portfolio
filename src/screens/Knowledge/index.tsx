import React, { useState } from 'react'

import knowledges from '@assets/data/knowledge.json'
import Card from '@components/Card'
import { Header } from '@components/Header'
import { PhotoWrapper } from '@components/PhotoWrapper'

import { Container } from './styles'

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
    <Container>
      <Header />
      <div className="content">
        <div className="rightContent">
          <div className="filter">
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
          </div>

          <div className="cardContent">
            {items.map(item => (
              <Card
                title={item.Tech}
                img={item.logo}
                status={item.status}
                key={item.id}
              />
            ))}
          </div>
        </div>

        <PhotoWrapper />
      </div>
    </Container>
  )
}
