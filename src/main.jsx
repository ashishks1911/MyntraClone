import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import ItemDetails from './components/ItemDetails.jsx'
import Bag from './components/Bag.jsx'
import WishList from './components/WishList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: `item/:itemId`, element: <ItemDetails />
      },
      {
        path: 'checkout/bag', element: <Bag />
      },
      {
        path: 'wishlist', element: <WishList />
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode >,
)
