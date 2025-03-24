import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      const item = state.filter((item) => item.itemId == action.payload.itemId && item.size === action.payload.size);
      if (item.length != 0) {
        toast.info('You have this item in your bag and we have increased the quantity by 1')
        const state2 = state.map((item) => item.itemId === action.payload.itemId && item.size === action.payload.size ? { ...item, qty: item.qty + 1 } : item);

        console.log(state2);
        return state2;
      }
      else {
        toast.success('Item added to Cart');
        console.log(state);
        state.push(action.payload);
        return state;
      }
    },

    removeFromBag: (state, action) => {
      state.filter((item) => item.id !== action.payload.itemId && item.size !== action.payload.size);
    }

  }
})

export const bagActions = bagSlice.actions;
export default bagSlice;