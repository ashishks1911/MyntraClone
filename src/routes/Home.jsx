import React, { lazy, Suspense } from 'react'
const ItemList = lazy(() => import('./ItemList'))

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading..</div>}>
        <ItemList />
      </Suspense>
    </main>
  )
}

export default Home
