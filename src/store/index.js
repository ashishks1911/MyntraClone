import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import bagSlice from './bagSlice';
import sizeDialog from './sizeDialog';
import checkoutSlice from './checkoutSlice';


const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
    sizeDialog: sizeDialog.reducer,
    checkoutItems : checkoutSlice.reducer
  }
})

export default store;