import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkoutItems",
  initialState: [],
  reducers: {
    setCheckoutItems: (state, action) => {
      return action.payload.filter((item)=>item.checked);
    }
  }

})

export const checkoutActions = checkoutSlice.actions;
export default checkoutSlice;