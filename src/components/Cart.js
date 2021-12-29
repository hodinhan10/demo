import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import trash from './../image/trash.png';

export default function Cart(props) {
  const { Shoe } = props;
  const [count, setCount] = useState(Shoe.qty);
  const dispatch = useDispatch()

  const removeFromCartHandle = () => {
    dispatch(removeFromCart(Shoe.id))
  }

  const increaseQtyHandle = () => {
    setCount(count + 1)
  }

  const palliationQtyHandle = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    dispatch(addToCart(Shoe, count));
  }, [dispatch,count]);

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-image" style={{ "backgroundColor": `${Shoe.color}` }}>
          <div className="cart-item-image-block">
            <img src={Shoe.image} alt="product" />
          </div>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-name">{Shoe.name}</div>
        <div className="cart-item-price">${Shoe.price}</div>
        <div className="cart-item-actions">
          <div className="cart-item-count">
            <div className="cart-item-count-button" onClick={palliationQtyHandle}>-</div>
            <div className="cart-item-count-number">{Shoe.qty}</div>
            <div className="cart-item-count-button" onClick={increaseQtyHandle}>+</div>
          </div>
          <div className="cart-item-remove" onClick={removeFromCartHandle}>
            <img src={trash} className="cart-item-remove-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
