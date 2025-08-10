import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'

export default function Header() {
  return (
    <div>
        <BrowserRouter>
         <Navbar/>

         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
         </Routes>
        </BrowserRouter>
      
    </div>
  )
}
