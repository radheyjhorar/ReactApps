import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
  cartData: []
}

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("Reducer: ", action)
      return [
        ...state,
        { cartData: action.data }
      ]

    case REMOVE_TO_CART:
      // console.log("Reducer: ", action)
      state.pop();
      return [
        ...state,
      ]

    default:
      return state;
  }
}

export default cartItems;