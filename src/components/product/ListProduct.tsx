import React, { useState } from 'react';
import { Products } from '../../interface';
import { useDispatch, useSelector } from 'react-redux';
import './listProduct.css';

export default function ListProduct() {
  const [quantities, setQuantities] = useState<{ [key: number]: string }>({});
  const [errorMessages, setErrorMessages] = useState<{ [key: number]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, productId: number, stock: number) => {
    const value = e.target.value;
    const intValue = parseInt(value, 10);

    if (intValue > stock) {
      setErrorMessages({
        ...errorMessages,
      });
      alert("Số lượng sản phẩm vượt quá số lượng trong kho")
    } 

    setQuantities({
      ...quantities,
      [productId]: value,
    });
  };

  const stateProduct: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = (product: Products) => {
    const quantity = parseInt(quantities[product.id], 10) || 1;
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity },
    });
  };

  return (
    <>
      <div className='listProductForm'>
        <div className='titleProduct'>ListProduct</div>
        <ul className='listProduct'>
          {stateProduct.productReducer.map((item: Products) => (
            <li key={item.id} className='product'>
              <img src={item.image} alt="" className='productImg' />
              <div className='productInfo'>
                <div className='nameProduct'>{item.name}</div>
                {item.description}
              </div>
              <div className='productBuy'>
                <input
                  type="number"
                  className='inpQuantity'
                  min={1}
                  max={item.stock}
                  value={quantities[item.id] || '1'}
                  onChange={(e) => handleInputChange(e, item.id, item.stock)}
                />
                {errorMessages[item.id] && (
                  <div className='errorMessage'>{errorMessages[item.id]}</div>
                )}
                <button onClick={() => addToCart(item)} className='btnbuy'>
                  {item.price} USD
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
