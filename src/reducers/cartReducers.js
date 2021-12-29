import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constans/cartConstans";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) { // thêm trùng lấy cái mới
        return {
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else { // ko trùng thêm mới vào
        return { cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload)
      }
    default:
      return state;
  }
};