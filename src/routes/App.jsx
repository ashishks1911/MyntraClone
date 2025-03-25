import { useEffect } from 'react'
import '../App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify';

import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import RemoveItemDialog from '../bag/RemoveItemDialog'

function App() {

  const bagItems = useSelector((store) => store.bag);

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
  }, [bagItems]);


  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
