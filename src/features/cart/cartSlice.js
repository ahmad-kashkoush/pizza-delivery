import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /* Pass Action creators */
    addTocart(state, action) {
      state.orders.push(action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.orders.find(item => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;

    },
    decreaseItemQuantity(state, action) {
      const item = state.orders.find(item => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice=item.unitPrice * item.quantity;
      if (item.quantity <= 0) cartSlice.caseReducers.removeFromCart(state, action);


    },
    removeFromCart(state, action) {
      state.orders = state.orders.filter(item => item.pizzaId != action.payload);
    },
    clearCart(state) {
      state.orders = initialState.orders;
      state.totalPrice = initialState.totalPrice;
      state.totalQuantity = initialState.totalQuantity;
    }

  },
});
export const getCart = (state) => state.cartReducer.orders;
export const getTotalQuantity = (state) => state.cartReducer.orders.reduce((acc, item) => acc + item.quantity, 0)
export const getTotalPrice = (state) => state.cartReducer.orders.reduce((acc, item) => acc + item.totalPrice, 0)
export const getQuantityById = id => (state) => state.cartReducer.orders.find(item => item.pizzaId === id)?.quantity ?? 0;
const cartReducer = cartSlice.reducer;
export default cartReducer;
export const { addTocart, removeFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;