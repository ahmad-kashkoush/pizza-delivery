import cartReducer from '@/features/cart/cartSlice';
import userReducer from '@/features/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { cartReducer, userReducer },
});

export default store;
