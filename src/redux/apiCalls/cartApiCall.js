import { cartActions } from "../slices/cartSlice";

// Add Item To Cart
export function addToCart(newItem) {
  return (dispatch, getState) => {
    try {
      // send request to server and get response

      dispatch(cartActions.addItemToCart(newItem));
      const {cart} = getState();
      localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));

    } catch (error) {
      console.log(error);
    }
  };
}

// Remove From Cart
export function removeFromCart(id) {
    return (dispatch, getState) => {
      try {
        // send request to server and get response
  
        dispatch(cartActions.removeItemFromCart(id));
        const {cart} = getState();
        localStorage.setItem("cartItems", JSON.stringify(cart.cartItems));
  
      } catch (error) {
        console.log(error);
      }
    };
  }
