import { productActions } from "../slices/productSlice";

// Fetch All Products
export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(productActions.getProducts(data));
    } catch (error) {
      console.log(error);
      dispatch(productActions.clearLoading());
    }
  };
}

// Fetch Single Product By Id
export function fetchSingleProduct(productId) {
    return async (dispatch) => {
      try {
        dispatch(productActions.setLoading());
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        const data = await response.json();
        dispatch(productActions.getProduct(data));
      } catch (error) {
        console.log(error);
        dispatch(productActions.clearLoading());
      }
    };
  }
