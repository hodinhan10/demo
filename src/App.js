import nike from './image/nike.png';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import Data from './data/shoes.json'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './actions/cartActions';
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const listId = cartItems.map(item => (item.id))

  const dispatch = useDispatch()

  const removeFromCartHandle = (id) => {
    dispatch(removeFromCart(id))
  }
  
  return (
    <div className="App">
      <div className="main-content">

        {/*  list product  */}
        <div className="card">
          <div className="card-top">
            <img src={nike} alt="nike" className="card-top-logo" />
          </div>
          <div className="card-title">
            Our Products
          </div>
          <div className="card-body">
            <div className="shop-items">
              {(Data.shoes).map((Shoe) => (
                <Product key={Shoe.id} Shoe={Shoe} listId={listId} />
              ))}
            </div>
          </div>
        </div>

        {/* cart  */}
        <div className="card">
          <div className="card-top">
            <img src={nike} alt="" className="card-top-logo" />
          </div>
          <div className="card-title">
            Yor card
            <span className="card-title-amount">
              ${cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
            </span>
          </div>
          <div className="card-body">
            {cartItems.length === 0 &&
              <div className="cart-empty">
                <div className="cart-empty-text">Your cart is empty.</div>
              </div>
            }
            <div className="cart-items">
              {cartItems.length > 0 && cartItems.map((Shoe) => (
                Shoe.qty > 0 ?
                <Cart key={Shoe.id} Shoe={Shoe} />:
                removeFromCartHandle(Shoe.id)
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
