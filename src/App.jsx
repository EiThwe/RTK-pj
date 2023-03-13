import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddToCart from './components/AddToCart'
import NavBar from './components/NavBar'
import Products from './components/Products'

const App = () => {
  return (
    <div className='bg-slate-200 p-3'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/addtocart" element={<AddToCart/>}/>

      </Routes>
    </div>
  )
}

export default App