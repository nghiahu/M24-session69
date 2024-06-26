import React from 'react'
import ListProduct from './components/product/ListProduct'
import Cart from './components/cart/Cart'
import './App.css'
export default function App() {
  return (
    <div >
      <div className='title'>Shopping Cart</div>
      <div className='layout'>
      <ListProduct></ListProduct>
      <Cart></Cart>
      </div>
    </div>
  )
}
