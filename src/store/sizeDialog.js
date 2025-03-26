import { createSlice } from "@reduxjs/toolkit";

const sizeDialog = createSlice({
  name: 'sizeDialog',
  initialState: false,
  reducers: {
    setDialogShow: (state, action) => {
      return action.payload;
    }
  }
})

export const sizeDialogActions = sizeDialog.actions;
export default sizeDialog; 