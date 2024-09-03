import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
      state.totalAmount += action.payload.price;
      console.log(JSON.stringify(state.items))
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
       console.log(typeof(item))
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalAmount -= item.price;
      }
    },
    removeitem: (state, action) => {
        const itemToRemove = state.items.find(item => item.id === action.payload);
        state.totalAmount -= itemToRemove.totalPrice;
        state.items = state.items.filter(item => item.id !== action.payload);
      },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity ,removeitem} = cartSlice.actions;
export default cartSlice.reducer;
