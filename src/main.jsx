import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'

import Home from './routes/Home.jsx'
import ItemDetails from './item/ItemDetails.jsx'
import Bag from './routes/Bag.jsx'
import WishList from './routes/WishList.jsx'
import ItemList from './routes/ItemList.jsx'
import MobileCarousel from './components/MobileCarousel.jsx'
import Address from './components/Address.jsx'
import store from './store/index.js'

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
      },
      {
        path: '/test', element: <MobileCarousel />
      }, {
        path: '/checkout/address',
        element: <Address />
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode >,
)
