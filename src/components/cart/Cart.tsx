import React from 'react'
import {CartProducts} from '../../interface'
import { useSelector } from 'react-redux'
import './cart.css'
export default function Cart() {
    const cartProduct:any = useSelector(state => state);
   
  return (
    <div className='outline'>
    <div className='cart'>
        <div className='titleCart'>Your Cart</div>
        <table className='tableCare'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            {cartProduct.cartReducer.length < 1 ? <h5>Empty product in your cart</h5> : 
                <tbody>
                {cartProduct.cartReducer.map((item:CartProducts,index:number)=>{
                    return <tr> 
                    <td key={item.id}>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price} USD</td>
                    <td className='inpquantityd'><input type="number"value={item.quantity} className='inpquantity'/></td>
                    <td className='funcionBtn'>
                        <button className='btnedit'>Update</button>
                        <button className='btndel'>Delete</button>
                    </td>
                    </tr>
                        
                })}
            </tbody>
            }
        </table>
            {cartProduct.cartReducer.length >0 ? 
            <div className='total'>
                <div className='totalP'>The are <div className='totalProduct'>{cartProduct.cartReducer.length} </div> items in your Shopping cart</div>
                <div></div>
            </div> : ""
        }

    </div>
    </div>
  )
}
