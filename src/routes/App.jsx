import { useEffect, useState } from 'react'
import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { Outlet } from 'react-router-dom'

function App() {
  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    let bag = document.querySelector('.bag-item-count');
    if (bagItems.length === 0) {
      bag.classList.add('hidden');
      bag.classList.remove('flex');
    }
    else {
      bag.classList.remove('hidden');
      bag.classList.add('flex');
      bag.innerHTML = bagItems.length;
    }
    console.log(bagItems);
  }, [bagItems]);


  return (
    <>
      <Header />
      <main>
        <Outlet context={{ bagItems, setBagItems }} />
      </main>
      <Footer />
    </>
  )
}

export default App
