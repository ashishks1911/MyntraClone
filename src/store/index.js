import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import bagSlice from './bagSlice';
import sizeDialog from './sizeDialog';


const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
    sizeDialog: sizeDialog.reducer
  }
})

export default store;