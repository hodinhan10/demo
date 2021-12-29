import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constans/cartConstans";

export const addToCart = (Shoe, qty) => async (dispatch, getState) => {
    console.log('qty',qty)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            color: Shoe.color,
            description: Shoe.description,
            id: Shoe.id,
            image: Shoe.image,
            name: Shoe.name,
            price: Shoe.price,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: id});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}