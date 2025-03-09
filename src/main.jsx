import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.jsx'
import ItemDetails from './components/ItemDetails.jsx'
import Bag from './routes/Bag.jsx'
import WishList from './components/WishList.jsx'
import ItemList from './routes/ItemList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: `category/:category/item/:itemId`, element: <ItemDetails />
      },
      {
        path: 'checkout/bag', element: <Bag />
      },
      {
        path: 'wishlist', element: <WishList />
      },
      {
        path: 'category/:category', element: <ItemList />
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode >,
)
