import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import check from '../image/check.png'
export default function Product(props) {
  const { Shoe, listId } = props;
  // console.log('Shoe', Shoe)
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(Shoe, 1))
  }
  return (
    <div className="shop-item">
      <div className="shop-item-image" style={{ "backgroundColor": `${Shoe.color}` }}>
        <img src={Shoe.image} alt="product" />
      </div>
      <div className="shop-item-name">
        {Shoe.name}
      </div>
      <div className="shop-item-description">
        {Shoe.description}
      </div>
      <div className="shop-item-bottom">
        <div className="shop-item-price">
          ${Shoe.price}
        </div>
        {
          listId.includes(Shoe.id) ?
            <div className="shop-item-button inactive">
              <div className="shop-item-button-cover">
                <img src={check} className="shop-item-button-cover-check-icon" />
              </div>
            </div>
            :
            <div className="shop-item-button" onClick={addToCartHandler}>
              <p>ADD TO CART</p>
            </div>
        }

      </div>
    </div>
  )
}
