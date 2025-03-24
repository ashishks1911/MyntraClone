import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice = createSlice({
  name: 'items',
  initialState: DEFAULT_ITEMS,
  reducers: {
    addIntitalItems: (state, action) => {
      return state;
    }
  }
});

export const itemActions = itemSlice.actions;

export default itemSlice; 