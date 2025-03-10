import React from 'react'
import items from '../items'
import ItemContainer from '../components/ItemContainer'

const Home = () => {
  return (
    <main>
      <div className='items-container md:w-[80%] w-full md:justify-start justify-center'>
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </main>
  )
}

export default Home
