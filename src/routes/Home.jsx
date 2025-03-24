import React, { lazy, Suspense } from 'react'
import Loader from '../components/Loader'
const ItemList = lazy(() => import('./ItemList'))

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Suspense fallback={<Loader />}>
        <ItemList />
      </Suspense>
    </main>
  )
}

export default Home
