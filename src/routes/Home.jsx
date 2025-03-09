import React from 'react'
import items from '../items'
import ItemContainer from '../components/ItemContainer'

const Home = () => {
  return (
    <main>
      <div className='items-container'>
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default Home
